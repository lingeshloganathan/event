import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GuestService } from './guest.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { FilterGuestDto } from './dto/filter-guest.dto';
import { Permissions } from 'src/guard/permission';
import {
  CREATE_GUEST,
  READ_ALL_GUEST,
  READ_GUEST,
} from 'script/const/permission.const';
import { JwtGuard } from 'src/guard/jwt-guard';
import { PermissionGuard } from 'src/guard/permission-guard';

@Controller('guest')
@UseGuards(JwtGuard, PermissionGuard)
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Permissions(CREATE_GUEST)
  @Post()
  async create(@Body() input: CreateGuestDto) {
    const data = await this.guestService.create(input);
    return {
      message: 'Guest created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_GUEST)
  @Get()
  async findAll(@Query() filter: FilterGuestDto) {
    const data = await this.guestService.findAll(filter);
    return {
      message: 'Guest fetched successfully',
      data,
    };
  }

  @Permissions(READ_GUEST)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.guestService.findOne(id);
    return {
      message: 'Guest fetched successfully',
      data,
    };
  }

  /*@Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateGuestDto) {
    const data = await this.guestService.update(id, input);
    return {
      message: 'Guest updated successfully',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.guestService.remove(id);
    return {
      message: 'Guest deleted successfully',
      data,
    };
  }
    */
}
