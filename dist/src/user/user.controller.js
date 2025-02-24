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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_guard_1 = require("../guard/permission-guard");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async findOne(id) {
        const data = await this.userService.findOne(id);
        return {
            message: 'User fetched successfully',
            data,
        };
    }
    async update(id, input) {
        const data = await this.userService.update(id, input);
        return {
            message: 'User updated successfully',
            data,
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.UPDATE_USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map