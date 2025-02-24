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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const permission_const_1 = require("../../script/const/permission.const");
const permission_1 = require("../guard/permission");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_guard_1 = require("../guard/permission-guard");
let CategoryController = class CategoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async findAll() {
        const data = await this.categoryService.findAll();
        return {
            message: 'Category fetched successfully',
            data,
        };
    }
    async findOne(id) {
        const data = await this.categoryService.findOne(id);
        return {
            message: 'Category fetched successfully',
            data,
        };
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_CATEGORY),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_CATEGORY),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOne", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map