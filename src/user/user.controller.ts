import {
  Controller,
  Body,
  Patch,
  Param,
  UseGuards,
  BadRequestException,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/guard/jwt-guard';
import { PermissionGuard } from 'src/guard/permission-guard';
import { Permissions } from 'src/guard/permission';
import { UPDATE_USER } from 'script/const/permission.const';

@Controller('user')
@UseGuards(JwtGuard, PermissionGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.userService.findOne(id);
    return {
      message: 'User fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_USER)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    const data = await this.userService.update(id, input);
    return {
      message: 'User updated successfully',
      data,
    };
  }
}
