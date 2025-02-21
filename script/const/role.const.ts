import {
  ADMIN,
  ATTENDEE,
  COORDINATOR,
  EVENT_VENDOR,
  STALL_VENDOR,
  SUPERVISOR,
} from './const';
import {
  admin,
  attendee,
  coordinator,
  eventVendor,
  stallVendor,
  supervisor,
} from './role-permissions.mapper';

const PermissionMapper = (Permissions: String[]) =>
  Permissions.map((it) => ({ name: it }));

export const rolesData = [
  {
    name: ADMIN,
    permissions: PermissionMapper(admin),
  },
  {
    name: EVENT_VENDOR,
    permissions: PermissionMapper(eventVendor),
  },
  {
    name: SUPERVISOR,
    permissions: PermissionMapper(supervisor),
  },
  {
    name: ATTENDEE,
    permissions: PermissionMapper(attendee),
  },
  {
    name: STALL_VENDOR,
    permissions: PermissionMapper(stallVendor),
  },
  {
    name: COORDINATOR,
    permissions: PermissionMapper(coordinator),
  },
];
