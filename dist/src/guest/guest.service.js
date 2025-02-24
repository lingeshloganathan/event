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
exports.GuestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const queryselect_1 = require("../queryselect");
const event_service_1 = require("../event/event.service");
let GuestService = class GuestService {
    prisma;
    eventService;
    constructor(prisma, eventService) {
        this.prisma = prisma;
        this.eventService = eventService;
    }
    async create(input) {
        await this.eventService.findOne(input.eventId);
        const guest = await this.prisma.guest.create({
            data: {
                name: input.name,
                eventId: input.eventId,
            },
            select: queryselect_1.GuestSelect,
        });
        return guest;
    }
    async findAll(filter) {
        const where = {
            recordStatus: { not: 'DELETED' },
        };
        if (filter.eventId) {
            where.eventId = filter.eventId;
        }
        return await this.prisma.guest.findMany({
            where,
            select: queryselect_1.GuestSelect,
        });
    }
    async findOne(id) {
        const guest = await this.prisma.guest.findUnique({
            where: { id },
            select: queryselect_1.GuestSelect,
        });
        if (!guest) {
            throw new common_1.BadRequestException('Guest not found');
        }
        return guest;
    }
};
exports.GuestService = GuestService;
exports.GuestService = GuestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_service_1.EventService])
], GuestService);
//# sourceMappingURL=guest.service.js.map