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
import { User } from '@prisma/client';
import { JwtGuard } from 'src/guard/jwt-guard';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() input: CreateEventDto, @CurrentUser() user: User) {
    const data = await this.eventService.create(input, user);
    return {
      message: 'Event created successfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.eventService.findAll();
    return {
      message: 'Events fetched successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.eventService.findOne(id);
    return {
      message: 'Event fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateEventDto) {
    const data = await this.eventService.update(id, input);
    return {
      message: 'Event updated successfully',
      data,
    };
  }

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
