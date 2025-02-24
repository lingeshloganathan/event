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
exports.StallController = void 0;
const common_1 = require("@nestjs/common");
const stall_service_1 = require("./stall.service");
const create_stall_dto_1 = require("./dto/create-stall.dto");
const update_stall_dto_1 = require("./dto/update-stall.dto");
const filter_stall_dto_1 = require("./dto/filter-stall.dto");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
const permission_guard_1 = require("../guard/permission-guard");
let StallController = class StallController {
    stallService;
    constructor(stallService) {
        this.stallService = stallService;
    }
    async create(input, user) {
        const data = await this.stallService.create(input, user);
        return {
            message: 'Stall created successfully',
            data,
        };
    }
    async findAll(filter) {
        const data = await this.stallService.findAll(filter);
        return {
            message: 'Stall fetched successfully',
            data,
        };
    }
    async findOne(id) {
        const data = await this.stallService.findOne(id);
        return {
            message: 'Stall fetched successfully',
            data,
        };
    }
    async update(id, input) {
        const data = await this.stallService.update(id, input);
        return {
            message: 'Stall updated successfully',
            data,
        };
    }
};
exports.StallController = StallController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.CREATE_STALL),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stall_dto_1.CreateStallDto, Object]),
    __metadata("design:returntype", Promise)
], StallController.prototype, "create", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_STALL),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_stall_dto_1.FilterStallDto]),
    __metadata("design:returntype", Promise)
], StallController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_STALL),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StallController.prototype, "findOne", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.UPDATE_STALL),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stall_dto_1.UpdateStallDto]),
    __metadata("design:returntype", Promise)
], StallController.prototype, "update", null);
exports.StallController = StallController = __decorate([
    (0, common_1.Controller)('stall'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [stall_service_1.StallService])
], StallController);
//# sourceMappingURL=stall.controller.js.map