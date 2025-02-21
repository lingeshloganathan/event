import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { _User } from 'src/interface';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    if (!permissions || !permissions?.length) {
      return true;
    }

    const user: _User = context.switchToHttp().getRequest().user;
    const data = user?.role;
    if (!data) return false;
    const userPermission = new Set(data.permissions.map((it) => it.name));
    const isValid = permissions.some((permission) =>
      userPermission.has(permission),
    );
    return isValid;
  }
}
