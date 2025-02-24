"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const venue_service_1 = require("../venue/venue.service");
const category_service_1 = require("../category/category.service");
const queryselect_1 = require("../queryselect");
let EventService = class EventService {
    prisma;
    venueService;
    categoryService;
    constructor(prisma, venueService, categoryService) {
        this.prisma = prisma;
        this.venueService = venueService;
        this.categoryService = categoryService;
    }
    async create(input, user) {
        const { venueId, categoryId, date, recurringDays, startDate, endDate, customDates, annualYearsCount, ...eventDto } = input;
        await this.venueService.findOne(venueId);
        await this.categoryService.findOne(categoryId);
        const data = {
            ...eventDto,
            category: { connect: { id: categoryId } },
            venue: { connect: { id: venueId } },
            user: { connect: { id: user.id } },
        };
        switch (input.eventType) {
            case 'SINGLE_DAY':
                if (!date) {
                    throw new common_1.BadRequestException('Date is required for single day event');
                }
                data.date = new Date(input.date);
                break;
            case 'CUSTOM_DATE':
                if (!customDates || customDates.length === 0) {
                    throw new common_1.BadRequestException('At least one date is required for CUSTOM_DATE event');
                }
                data.recurringDates = customDates.map((date) => new Date(date));
                break;
            case 'ALL_DAYS':
                if (!startDate || !endDate) {
                    throw new common_1.BadRequestException('Start date and end date are required for ALL_DAYS event');
                }
                data.recurringDates = await this.generateAllDays(startDate, endDate);
                break;
            case 'ANNUAL':
                if (!date || !annualYearsCount) {
                    throw new common_1.BadRequestException('Date is required for ANNUAL event');
                }
                data.recurringDates = await this.generateAnnualEvent(date, annualYearsCount);
                break;
            case 'SEASONAL':
                if (!startDate || !endDate) {
                    throw new common_1.BadRequestException('Start date and end date are required for ALL_DAYS event');
                }
                data.recurringDates = await this.generateAllDays(startDate, endDate);
                break;
            case 'FIRST_SATURDAY':
                data.recurringDates = await this.generateFirstSaturdayEvents();
                break;
            case 'RECURRING':
                if (!recurringDays ||
                    recurringDays.length === 0 ||
                    !startDate ||
                    !endDate) {
                    throw new common_1.BadRequestException('At least one day is required for RECURRING event');
                }
                data.recurringDates = await this.generateRecurringEvents(recurringDays, startDate, endDate);
                break;
        }
        return await this.prisma.event.create({
            data,
            select: queryselect_1.EventSelect,
        });
    }
    async generateAllDays(startDate, endDate) {
        const dates = [];
        const sDate = new Date(startDate);
        const eDate = new Date(endDate);
        for (let date = sDate; date <= eDate; date.setDate(date.getDate() + 1)) {
            dates.push(new Date(date));
        }
        return dates;
    }
    async generateAnnualEvent(date, yearsCount) {
        const dates = [];
        const baseDate = new Date(date);
        const currentYear = baseDate.getFullYear();
        for (let i = 0; i < yearsCount; i++) {
            const newDate = new Date(baseDate);
            newDate.setFullYear(currentYear + i);
            dates.push(newDate);
        }
        return dates;
    }
    generateFirstSaturdayEvents() {
        const dates = [];
        const now = new Date();
        const year = now.getFullYear();
        for (let month = 0; month < 12; month++) {
            let firstDay = new Date(Date.UTC(year, month, 1));
            let dayOfWeek = firstDay.getUTCDay();
            if (dayOfWeek !== 6) {
                firstDay.setUTCDate(firstDay.getUTCDate() + ((6 - dayOfWeek + 7) % 7));
            }
            dates.push(firstDay);
        }
        return dates;
    }
    async generateRecurringEvents(recurringDays, startDate, endDate) {
        const dates = [];
        let currentDate = new Date(startDate);
        const end = new Date(endDate);
        while (currentDate <= end) {
            const daysOfWeek = currentDate
                .toLocaleDateString('en-US', {
                weekday: 'long',
            })
                .toLowerCase();
            if (recurringDays.includes(daysOfWeek)) {
                dates.push(new Date(currentDate));
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    }
    async findAll(query) {
        const args = {
            orderBy: { createdAt: 'desc' },
            select: queryselect_1.EventSelect,
        };
        const where = {
            recordStatus: { not: 'DELETED' },
        };
        if (query.registrationType) {
            where.registrationType = query.registrationType;
        }
        if (query.eventType) {
            where.eventType = query.eventType;
        }
        if (query.venueId) {
            where.venueId = query.venueId;
        }
        args.where = where;
        return await this.prisma.event.findMany(args);
    }
    async findOne(id) {
        const event = await this.prisma.event.findUnique({
            where: {
                id,
                recordStatus: { not: 'DELETED' },
            },
            select: queryselect_1.EventSelect,
        });
        if (!event) {
            throw new common_1.BadRequestException('Event not found');
        }
        return event;
    }
    async update(id, input) {
        await this.findOne(id);
        await this.venueService.findOne(input.venueId);
        const event = await this.prisma.event.update({
            where: { id },
            data: { ...input },
            select: queryselect_1.EventSelect,
        });
        return event;
    }
    async remove(id) {
        const event = await this.prisma.event.update({
            where: { id },
            data: { recordStatus: 'DELETED' },
            select: {
                id: true,
            },
        });
        return event;
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        venue_service_1.VenueService,
        category_service_1.CategoryService])
], EventService);
//# sourceMappingURL=event.service.js.map