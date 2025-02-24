"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesData = void 0;
const const_1 = require("./const");
const role_permissions_mapper_1 = require("./role-permissions.mapper");
const PermissionMapper = (Permissions) => Permissions.map((it) => ({ name: it }));
exports.rolesData = [
    {
        name: const_1.ADMIN,
        permissions: PermissionMapper(role_permissions_mapper_1.admin),
    },
    {
        name: const_1.EVENT_VENDOR,
        permissions: PermissionMapper(role_permissions_mapper_1.eventVendor),
    },
    {
        name: const_1.SUPERVISOR,
        permissions: PermissionMapper(role_permissions_mapper_1.supervisor),
    },
    {
        name: const_1.ATTENDEE,
        permissions: PermissionMapper(role_permissions_mapper_1.attendee),
    },
    {
        name: const_1.STALL_VENDOR,
        permissions: PermissionMapper(role_permissions_mapper_1.stallVendor),
    },
    {
        name: const_1.COORDINATOR,
        permissions: PermissionMapper(role_permissions_mapper_1.coordinator),
    },
];
//# sourceMappingURL=role.const.js.map