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
exports.ParticipantController = void 0;
const common_1 = require("@nestjs/common");
const participant_service_1 = require("./participant.service");
const create_participant_dto_1 = require("./dto/create-participant.dto");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const filter_dto_1 = require("./dto/filter-dto");
const jwt_guard_1 = require("../guard/jwt-guard");
const permission_1 = require("../guard/permission");
const permission_const_1 = require("../../script/const/permission.const");
const permission_guard_1 = require("../guard/permission-guard");
let ParticipantController = class ParticipantController {
    participantService;
    constructor(participantService) {
        this.participantService = participantService;
    }
    async create(input, user) {
        const data = await this.participantService.create(input, user);
        return {
            message: 'Participant created successfully',
            data,
        };
    }
    async findAll(input) {
        const data = await this.participantService.findAll(input);
        return {
            message: 'Participant fetched successfully',
            data,
        };
    }
    async findOne(id) {
        const data = await this.participantService.findOne(id);
        return {
            message: 'Participant fetched successfully',
            data,
        };
    }
};
exports.ParticipantController = ParticipantController;
__decorate([
    (0, permission_1.Permissions)(permission_const_1.CREATE_PARTICIPANT),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participant_dto_1.CreateParticipantDto, Object]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "create", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_ALL_PARTICIPANT),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterParticipantDto]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findAll", null);
__decorate([
    (0, permission_1.Permissions)(permission_const_1.READ_PARTICIPANT),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findOne", null);
exports.ParticipantController = ParticipantController = __decorate([
    (0, common_1.Controller)('participant'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, permission_guard_1.PermissionGuard),
    __metadata("design:paramtypes", [participant_service_1.ParticipantService])
], ParticipantController);
//# sourceMappingURL=participant.controller.js.map