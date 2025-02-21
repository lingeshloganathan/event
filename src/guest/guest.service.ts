import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GuestSelect } from 'src/queryselect';
import { FilterGuestDto } from './dto/filter-guest.dto';
import { Prisma } from '@prisma/client';
import { EventService } from 'src/event/event.service';

@Injectable()
export class GuestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventService: EventService,
  ) {}

  async create(input: CreateGuestDto) {
    await this.eventService.findOne(input.eventId);
    const guest = await this.prisma.guest.create({
      data: {
        name: input.name,
        eventId: input.eventId,
      },
      select: GuestSelect,
    });
    return guest;
  }

  async findAll(filter: FilterGuestDto) {
    const where: Prisma.GuestWhereInput = {
      recordStatus: { not: 'DELETED' },
    };
    if (filter.eventId) {
      where.eventId = filter.eventId;
    }
    return await this.prisma.guest.findMany({
      where,
      select: GuestSelect,
    });
  }

  async findOne(id: string) {
    const guest = await this.prisma.guest.findUnique({
      where: { id },
      select: GuestSelect,
    });
    if (!guest) {
      throw new BadRequestException('Guest not found');
    }
    return guest;
  }

  /*async update(id: string, input: UpdateGuestDto) {
    const guest = await this.prisma.guest.update({
      where: { id },
      data: {
        name: input.name,
        eventId: input.eventId,
      },
      select: GuestSelect,
    });
    if (!guest) {
      throw new BadRequestException('Guest not found');
    }
    return guest;
  }

  async remove(id: string) {
    const guest = await this.prisma.guest.delete({
      where: { id },
      select: GuestSelect,
    });
    if (!guest) {
      throw new BadRequestException('Guest not found');
    }
    return guest;
  }*/
}
