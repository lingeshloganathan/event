"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const venue_module_1 = require("./venue/venue.module");
const category_module_1 = require("./category/category.module");
const event_module_1 = require("./event/event.module");
const ticket_module_1 = require("./ticket/ticket.module");
const participant_module_1 = require("./participant/participant.module");
const guest_module_1 = require("./guest/guest.module");
const stall_module_1 = require("./stall/stall.module");
const user_module_1 = require("./user/user.module");
const cron_module_1 = require("./cron/cron.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            venue_module_1.VenueModule,
            category_module_1.CategoryModule,
            event_module_1.EventModule,
            ticket_module_1.TicketModule,
            participant_module_1.ParticipantModule,
            guest_module_1.GuestModule,
            stall_module_1.StallModule,
            user_module_1.UserModule,
            cron_module_1.CronModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map