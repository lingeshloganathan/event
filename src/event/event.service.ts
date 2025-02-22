import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { VenueService } from 'src/venue/venue.service';
import { CategoryService } from 'src/category/category.service';
import { EventSelect } from 'src/queryselect';
import { _User } from 'src/interface';

@Injectable()
export class EventService {
  constructor(
    private prisma: PrismaService,
    private readonly venueService: VenueService,
    private readonly categoryService: CategoryService,
  ) {}

  async create(input: CreateEventDto, user: _User) {
    const { categoryId, venueId, ...eventDto } = input;
    await this.venueService.findOne(venueId);
    await this.categoryService.findOne(categoryId);
    const data = await this.prisma.event.create({
      data: {
        ...eventDto,
        categoryId,
        venueId,
        userId: user.id,
      },
      select: EventSelect,
    });
    return data;
  }

  async findAll() {
    return await this.prisma.event.findMany({
      where: {
        recordStatus: { not: 'DELETED' },
      },
      select: EventSelect,
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: {
        id,
        recordStatus: { not: 'DELETED' },
      },
      select: EventSelect,
    });
    if (!event) {
      throw new BadRequestException('Event not found');
    }
    return event;
  }

  async update(id: string, input: UpdateEventDto) {
    await this.findOne(id);
    await this.venueService.findOne(input.venueId);
    const event = await this.prisma.event.update({
      where: { id },
      data: { ...input },
      select: EventSelect,
    });
    return event;
  }

  async remove(id: string) {
    const event = await this.prisma.event.update({
      where: { id },
      data: { recordStatus: 'DELETED' },
      select: {
        id: true,
      },
    });
    return event;
  }
}
