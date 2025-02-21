import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStallDto } from './dto/create-stall.dto';
import { UpdateStallDto } from './dto/update-stall.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StallSelect } from 'src/queryselect';
import { FilterStallDto } from './dto/filter-stall.dto';
import { Prisma, User } from '@prisma/client';
import { EventService } from 'src/event/event.service';

@Injectable()
export class StallService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventService: EventService,
  ) {}

  async create(input: CreateStallDto, user: User) {
    await this.eventService.findOne(input.eventId);
    return await this.prisma.stall.create({
      data: {
        name: input.name,
        eventId: input.eventId,
        userId: user.id,
      },
      select: StallSelect,
    });
  }

  async findAll(filter: FilterStallDto) {
    const where: Prisma.StallWhereInput = {
      recordStatus: { not: 'DELETED' },
    };
    if (filter.eventId) {
      where.eventId = filter.eventId;
    }
    if (filter.userId) {
      where.userId = filter.userId;
    }
    return await this.prisma.stall.findMany({
      where,
      select: StallSelect,
    });
  }

  async findOne(id: string) {
    const stall = await this.prisma.stall.findUnique({
      where: { id },
      select: StallSelect,
    });
    if (!stall) {
      throw new BadRequestException('Stall not found');
    }
    return stall;
  }

  async update(id: string, input: UpdateStallDto) {
    const stall = await this.findOne(id);
    if (!stall) {
      throw new BadRequestException('Stall not found');
    }
    return await this.prisma.stall.update({
      where: { id },
      data: {
        status: input.status,
      },
      select: {
        id: true,
        name: true,
        status: true,
      },
    });
  }

  /*remove(id: number) {
    return `This action removes a #${id} stall`;
  }
  */
}
