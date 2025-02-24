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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const ticket_filter_dto_1 = require("./dto/ticket-filter.dto");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_guard_1 = require("../guard/permission-guard");
let TicketController = class TicketController {
    ticketService;
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async findAll(input) {
        const data = await this.ticketService.findAll(input);
        return {
            message: 'Ticket fetched successfully',
            data,
        };
    }
    async findOne(id, user) {
        const data = await this.ticketService.findOne(id, user);
        return {
            message: 'Ticket fetched successfully',
            data,
        };
    }
    async getQrCode(eventId, input) {
        const data = await this.ticketService.getQrCode(eventId, input);
        return {
            message: 'Ticket QR code fetched successfully',
            data,
        };
    }
};
exports.TicketController = TicketController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_TICKET),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_filter_dto_1.TicketFilterDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_TICKET),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findOne", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_TICKET_BY_QR_CODE),
    (0, common_1.Get)('qrcode/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ticket_filter_dto_1.TicketQrCodeDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getQrCode", null);
exports.TicketController = TicketController = __decorate([
    (0, common_1.Controller)('tickets'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
//# sourceMappingURL=ticket.controller.js.map