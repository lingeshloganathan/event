"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stallVendor = exports.coordinator = exports.attendee = exports.supervisor = exports.eventVendor = exports.admin = void 0;
const permission_const_1 = require("./permission.const");
exports.admin = [
    permission_const_1.READ_ALL_CATEGORY,
    permission_const_1.READ_CATEGORY,
    permission_const_1.CREATE_EVENT,
    permission_const_1.READ_ALL_EVENT,
    permission_const_1.READ_EVENT,
    permission_const_1.UPDATE_EVENT,
    permission_const_1.DELETE_EVENT,
    permission_const_1.READ_ALL_PARTICIPANT,
    permission_const_1.READ_ALL_GUEST,
    permission_const_1.READ_ALL_STALL,
    permission_const_1.READ_ALL_VENUE,
    permission_const_1.READ_ALL_TICKET,
    permission_const_1.UPDATE_STALL,
    permission_const_1.UPDATE_USER,
];
exports.eventVendor = [
    permission_const_1.READ_ALL_CATEGORY,
    permission_const_1.CREATE_EVENT,
    permission_const_1.READ_ALL_EVENT,
    permission_const_1.READ_EVENT,
    permission_const_1.UPDATE_EVENT,
    permission_const_1.DELETE_EVENT,
    permission_const_1.CREATE_GUEST,
    permission_const_1.READ_ALL_GUEST,
    permission_const_1.READ_GUEST,
    permission_const_1.READ_ALL_PARTICIPANT,
    permission_const_1.CREATE_VENUE,
    permission_const_1.UPDATE_VENUE,
    permission_const_1.UPDATE_STALL,
    permission_const_1.UPDATE_USER,
];
exports.supervisor = [
    permission_const_1.CREATE_GUEST,
    permission_const_1.READ_ALL_GUEST,
    permission_const_1.READ_GUEST,
    permission_const_1.UPDATE_USER,
];
exports.attendee = [
    permission_const_1.CREATE_PARTICIPANT,
    permission_const_1.READ_ALL_GUEST,
    permission_const_1.READ_ALL_EVENT,
    permission_const_1.READ_ALL_STALL,
    permission_const_1.READ_STALL,
    permission_const_1.READ_ALL_CATEGORY,
    permission_const_1.READ_TICKET,
    permission_const_1.READ_ALL_VENUE,
    permission_const_1.UPDATE_USER,
];
exports.coordinator = [permission_const_1.READ_TICKET_BY_QR_CODE, permission_const_1.UPDATE_USER];
exports.stallVendor = [
    permission_const_1.CREATE_STALL,
    permission_const_1.READ_ALL_EVENT,
    permission_const_1.READ_ALL_STALL,
    permission_const_1.READ_STALL,
    permission_const_1.READ_ALL_VENUE,
    permission_const_1.READ_VENUE,
    permission_const_1.UPDATE_USER,
];
//# sourceMappingURL=role-permissions.mapper.js.map