import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { GuestService } from './guest.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { FilterGuestDto } from './dto/filter-guest.dto';

@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post()
  async create(@Body() input: CreateGuestDto) {
    const data = await this.guestService.create(input);
    return {
      message: 'Guest created successfully',
      data,
    };
  }

  @Get()
  async findAll(@Query() filter: FilterGuestDto) {
    const data = await this.guestService.findAll(filter);
    return {
      message: 'Guest fetched successfully',
      data,
    };
  }

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
