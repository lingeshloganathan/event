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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const create_event_dto_1 = require("./dto/create-event.dto");
const update_event_dto_1 = require("./dto/update-event.dto");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
const permission_guard_1 = require("../guard/permission-guard");
const filter_event_dto_1 = require("./dto/filter-event.dto");
let EventController = class EventController {
    eventService;
    constructor(eventService) {
        this.eventService = eventService;
    }
    async create(input, user) {
        const data = await this.eventService.create(input, user);
        return {
            message: 'Event created successfully',
            data,
        };
    }
    async findAll(query) {
        const data = await this.eventService.findAll(query);
        return {
            message: 'Events fetched successfully',
            data,
        };
    }
    async findOne(id) {
        const data = await this.eventService.findOne(id);
        return {
            message: 'Event fetched successfully',
            data,
        };
    }
    async update(id, input) {
        const data = await this.eventService.update(id, input);
        return {
            message: 'Event updated successfully',
            data,
        };
    }
    async remove(id) {
        const data = await this.eventService.remove(id);
        return {
            message: 'Event deleted successfully',
            data: {
                id: data.id,
            },
        };
    }
};
exports.EventController = EventController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.CREATE_EVENT),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "create", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_EVENT),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_event_dto_1.FilterEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_EVENT),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "findOne", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.UPDATE_EVENT),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "update", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.DELETE_EVENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "remove", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)('events'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map