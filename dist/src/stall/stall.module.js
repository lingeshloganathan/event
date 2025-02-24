"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StallModule = void 0;
const common_1 = require("@nestjs/common");
const stall_service_1 = require("./stall.service");
const stall_controller_1 = require("./stall.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const event_module_1 = require("../event/event.module");
let StallModule = class StallModule {
};
exports.StallModule = StallModule;
exports.StallModule = StallModule = __decorate([
    (0, common_1.Module)({
        imports: [event_module_1.EventModule],
        controllers: [stall_controller_1.StallController],
        providers: [stall_service_1.StallService, prisma_service_1.PrismaService],
    })
], StallModule);
//# sourceMappingURL=stall.module.js.map