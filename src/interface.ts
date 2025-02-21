import { Permission } from '@prisma/client';

export interface JwtPayload {
  userId: string;
  roleType: string;
}

export interface _Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface _User {
  id: string;
  role: _Role;
}
