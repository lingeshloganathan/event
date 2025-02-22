import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { JwtGuard } from 'src/guard/jwt-guard';
import { _User } from 'src/interface';
import { Permissions } from 'src/guard/permission';
import {
  CREATE_EVENT,
  DELETE_EVENT,
  READ_ALL_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from 'script/const/permission.const';
import { PermissionGuard } from 'src/guard/permission-guard';

@Controller('events')
@UseGuards(JwtGuard, PermissionGuard)
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Permissions(CREATE_EVENT)
  @Post()
  async create(@Body() input: CreateEventDto, @CurrentUser() user: _User) {
    const data = await this.eventService.create(input, user);
    return {
      message: 'Event created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_EVENT)
  @Get()
  async findAll() {
    const data = await this.eventService.findAll();
    return {
      message: 'Events fetched successfully',
      data,
    };
  }

  @Permissions(READ_EVENT)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.eventService.findOne(id);
    return {
      message: 'Event fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_EVENT)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateEventDto) {
    const data = await this.eventService.update(id, input);
    return {
      message: 'Event updated successfully',
      data,
    };
  }

  @Permissions(DELETE_EVENT)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.eventService.remove(id);
    return {
      message: 'Event deleted successfully',
      data: {
        id: data.id,
      },
    };
  }
}
