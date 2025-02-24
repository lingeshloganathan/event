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
exports.VenueController = void 0;
const common_1 = require("@nestjs/common");
const venue_service_1 = require("./venue.service");
const create_venue_dto_1 = require("./dto/create-venue.dto");
const update_venue_dto_1 = require("./dto/update-venue.dto");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_guard_1 = require("../guard/permission-guard");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
let VenueController = class VenueController {
    venueService;
    constructor(venueService) {
        this.venueService = venueService;
    }
    async create(input) {
        const data = await this.venueService.create(input);
        return {
            message: 'Venue created successfully',
            data,
        };
    }
    async findAll() {
        const data = await this.venueService.findAll();
        return {
            message: 'Venue fetched successfully',
            data,
        };
    }
    async findOne(id) {
        const data = await this.venueService.findOne(id);
        return {
            message: 'Venue fetched successfully',
            data,
        };
    }
    async update(id, input) {
        const data = await this.venueService.update(id, input);
        return {
            message: 'Venue updated successfully',
            data,
        };
    }
};
exports.VenueController = VenueController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.CREATE_VENUE),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venue_dto_1.CreateVenueDto]),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "create", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_VENUE),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_VENUE),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "findOne", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.UPDATE_VENUE),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_venue_dto_1.UpdateVenueDto]),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "update", null);
exports.VenueController = VenueController = __decorate([
    (0, common_1.Controller)('venue'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [venue_service_1.VenueService])
], VenueController);
//# sourceMappingURL=venue.controller.js.map