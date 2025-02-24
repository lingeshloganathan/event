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
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const create_venue_dto_1 = require("./dto/create-venue.dto");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_guard_1 = require("../guard/jwt-guard");
const queryselect_1 = require("../queryselect");
let VenueService = class VenueService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        const venue = await this.prisma.venue.create({
            data: {
                name: input.name,
                address: input.address,
                capacity: input.capacity,
            },
            select: queryselect_1.VenueSelect,
        });
        return venue;
    }
    async findAll() {
        return await this.prisma.venue.findMany({
            where: {
                recordStatus: { not: 'DELETED' },
            },
            select: queryselect_1.VenueSelect,
        });
    }
    async findOne(id) {
        const venue = await this.prisma.venue.findUnique({
            where: { id, recordStatus: { not: 'DELETED' } },
            select: queryselect_1.VenueSelect,
        });
        if (!venue) {
            throw new common_1.NotFoundException('Venue not found');
        }
        return venue;
    }
    async update(id, input) {
        const venue = await this.findOne(id);
        if (!venue) {
            throw new common_1.BadRequestException('Venue not found');
        }
        return await this.prisma.venue.update({
            where: { id },
            data: {
                name: input.name,
                address: input.address,
                capacity: input.capacity,
            },
            select: queryselect_1.VenueSelect,
        });
    }
};
exports.VenueService = VenueService;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venue_dto_1.CreateVenueDto]),
    __metadata("design:returntype", Promise)
], VenueService.prototype, "create", null);
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VenueService);
//# sourceMappingURL=venue.service.js.map