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
exports.ParticipantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const event_service_1 = require("../event/event.service");
const queryselect_1 = require("../queryselect");
let ParticipantService = class ParticipantService {
    prisma;
    eventService;
    constructor(prisma, eventService) {
        this.prisma = prisma;
        this.eventService = eventService;
    }
    async create(input, user) {
        const event = await this.eventService.findOne(input.eventId);
        const count = await this.prisma.participant.count({
            where: {
                eventId: input.eventId,
            },
        });
        if (count === event.venue?.capacity) {
            throw new common_1.BadRequestException('Regitration over');
        }
        const ticketData = {
            user: {
                connect: {
                    id: user.id,
                },
            },
            event: {
                connect: {
                    id: input.eventId,
                },
            },
            qrCode: `TICKET-${count + 1}`,
        };
        if (event.eventType === 'SINGLE_DAY') {
            if (input.selectedDates.length > 1) {
                throw new common_1.BadRequestException('Single day event cannot have multiple dates');
            }
        }
        let selectedDates = [];
        if (input.selectedDates.length > 0) {
            selectedDates = input.selectedDates.map((date) => new Date(date));
            const validDates = event.recurringDates.map((date) => new Date(date));
            const isDateValid = selectedDates.every((date) => validDates.some((validDate) => validDate.toISOString().split('T')[0] ===
                date.toISOString().split('T')[0]));
            if (!isDateValid) {
                throw new common_1.BadRequestException('One or more selected dates are not valid for this event');
            }
            ticketData.selectedDates = selectedDates;
        }
        const data = {
            name: input.name,
            user: {
                connect: {
                    id: user.id,
                },
            },
            event: {
                connect: {
                    id: input.eventId,
                },
            },
            ticket: {
                create: ticketData,
            },
        };
        const participant = await this.prisma.participant.create({
            data,
            select: queryselect_1.ParticipantSelect,
        });
        return participant;
    }
    async findAll(input) {
        const where = {};
        if (input.eventId) {
            where.eventId = input.eventId;
        }
        return await this.prisma.participant.findMany({
            where,
            select: queryselect_1.ParticipantSelect,
        });
    }
    async findOne(id) {
        const participant = await this.prisma.participant.findUnique({
            where: {
                id,
            },
            select: queryselect_1.ParticipantSelect,
        });
        if (!participant) {
            throw new common_1.BadRequestException('Participant not found');
        }
        return participant;
    }
};
exports.ParticipantService = ParticipantService;
exports.ParticipantService = ParticipantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_service_1.EventService])
], ParticipantService);
//# sourceMappingURL=participant.service.js.map