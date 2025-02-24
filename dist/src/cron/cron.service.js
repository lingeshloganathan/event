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
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CronService = class CronService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateTicketStatus() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tickets = await this.prisma.ticket.findMany({
            where: {
                status: 'VALIDATED',
                selectedDates: {
                    hasEvery: [today],
                },
            },
            select: { id: true },
        });
        if (tickets.length > 0) {
            await this.prisma.ticket.updateMany({
                where: { id: { in: tickets.map((ticket) => ticket.id) } },
                data: { status: 'CANCELLED' },
            });
        }
    }
};
exports.CronService = CronService;
exports.CronService = CronService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CronService);
//# sourceMappingURL=cron.service.js.map