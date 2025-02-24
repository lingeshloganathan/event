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
exports.StallService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const queryselect_1 = require("../queryselect");
const event_service_1 = require("../event/event.service");
let StallService = class StallService {
    prisma;
    eventService;
    constructor(prisma, eventService) {
        this.prisma = prisma;
        this.eventService = eventService;
    }
    async create(input, user) {
        await this.eventService.findOne(input.eventId);
        return await this.prisma.stall.create({
            data: {
                name: input.name,
                eventId: input.eventId,
                userId: user.id,
            },
            select: queryselect_1.StallSelect,
        });
    }
    async findAll(filter) {
        const where = {
            recordStatus: { not: 'DELETED' },
        };
        if (filter.eventId) {
            where.eventId = filter.eventId;
        }
        if (filter.userId) {
            where.userId = filter.userId;
        }
        return await this.prisma.stall.findMany({
            where,
            select: queryselect_1.StallSelect,
        });
    }
    async findOne(id) {
        const stall = await this.prisma.stall.findUnique({
            where: { id },
            select: queryselect_1.StallSelect,
        });
        if (!stall) {
            throw new common_1.BadRequestException('Stall not found');
        }
        return stall;
    }
    async update(id, input) {
        const stall = await this.findOne(id);
        if (!stall) {
            throw new common_1.BadRequestException('Stall not found');
        }
        return await this.prisma.stall.update({
            where: { id },
            data: {
                status: input.status,
            },
            select: {
                id: true,
                name: true,
                status: true,
            },
        });
    }
};
exports.StallService = StallService;
exports.StallService = StallService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_service_1.EventService])
], StallService);
//# sourceMappingURL=stall.service.js.map