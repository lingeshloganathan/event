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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const queryselect_1 = require("../queryselect");
const event_service_1 = require("../event/event.service");
let TicketService = class TicketService {
    prisma;
    eventService;
    constructor(prisma, eventService) {
        this.prisma = prisma;
        this.eventService = eventService;
    }
    async findAll(input) {
        const where = {
            recordStatus: { not: 'DELETED' },
            status: 'VALIDATED',
        };
        if (input.eventId) {
            where.eventId = input.eventId;
        }
        return this.prisma.ticket.findMany({
            where,
            select: queryselect_1.TicketSelect,
        });
    }
    async findOne(id, user) {
        const where = {
            id,
            recordStatus: { not: 'DELETED' },
            status: 'VALIDATED',
        };
        if (user.role.name === client_1.RoleType.ATTENDEE) {
            where.userId = user.id;
        }
        const ticket = await this.prisma.ticket.findUnique({
            where,
            select: queryselect_1.TicketSelect,
        });
        if (!ticket) {
            throw new common_1.BadRequestException('Ticket not found');
        }
        return ticket;
    }
    async getQrCode(eventId, input) {
        await this.eventService.findOne(eventId);
        const ticket = await this.prisma.ticket.findFirst({
            where: {
                eventId: eventId,
                qrCode: input.qrCode,
                recordStatus: { not: 'DELETED' },
                status: 'VALIDATED',
            },
            select: queryselect_1.TicketSelect,
        });
        if (!ticket) {
            throw new common_1.BadRequestException('Ticket not found');
        }
        if (ticket.selectedDates && ticket.selectedDates.length > 0) {
            const today = new Date().toISOString().split('T')[0];
            const isDateValid = ticket.selectedDates.some((date) => new Date(date).toISOString().split('T')[0] === today);
            if (!isDateValid) {
                throw new common_1.BadRequestException('Ticket is not valid for today');
            }
        }
        return ticket;
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_service_1.EventService])
], TicketService);
//# sourceMappingURL=ticket.service.js.map