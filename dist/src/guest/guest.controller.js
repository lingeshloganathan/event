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
exports.GuestController = void 0;
const common_1 = require("@nestjs/common");
const guest_service_1 = require("./guest.service");
const create_guest_dto_1 = require("./dto/create-guest.dto");
const filter_guest_dto_1 = require("./dto/filter-guest.dto");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_guard_1 = require("../guard/permission-guard");
let GuestController = class GuestController {
    guestService;
    constructor(guestService) {
        this.guestService = guestService;
    }
    async create(input) {
        const data = await this.guestService.create(input);
        return {
            message: 'Guest created successfully',
            data,
        };
    }
    async findAll(filter) {
        const data = await this.guestService.findAll(filter);
        return {
            message: 'Guest fetched successfully',
            data,
        };
    }
    async findOne(id) {
        const data = await this.guestService.findOne(id);
        return {
            message: 'Guest fetched successfully',
            data,
        };
    }
};
exports.GuestController = GuestController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.CREATE_GUEST),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guest_dto_1.CreateGuestDto]),
    __metadata("design:returntype", Promise)
], GuestController.prototype, "create", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_GUEST),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_guest_dto_1.FilterGuestDto]),
    __metadata("design:returntype", Promise)
], GuestController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_GUEST),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuestController.prototype, "findOne", null);
exports.GuestController = GuestController = __decorate([
    (0, common_1.Controller)('guest'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [guest_service_1.GuestService])
], GuestController);
//# sourceMappingURL=guest.controller.js.map