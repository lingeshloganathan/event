import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { EventService } from 'src/event/event.service';
import { FilterParticipantDto } from './dto/filter-dto';
import { ParticipantSelect } from 'src/queryselect';

@Injectable()
export class ParticipantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventService: EventService,
  ) {}

  async create(input: CreateParticipantDto, user: User) {
    const event = await this.eventService.findOne(input.eventId);
    const count = await this.prisma.participant.count({
      where: {
        eventId: input.eventId,
      },
    });
    if (count === event.venue?.capacity) {
      throw new BadRequestException('Regitration over');
    }
    const participant = await this.prisma.participant.create({
      data: {
        userId: user.id,
        eventId: input.eventId,
        name: user.name,
        ticket: {
          create: {
            userId: user.id,
            eventId: input.eventId,
            qrCode: `TICKET-${count + 1}`,
          },
        },
      },
      select: ParticipantSelect,
    });
    return participant;
  }

  async findAll(input: FilterParticipantDto) {
    const where: Prisma.ParticipantWhereInput = {};
    if (input.eventId) {
      where.eventId = input.eventId;
    }
    return await this.prisma.participant.findMany({
      where,
      select: ParticipantSelect,
    });
  }

  async findOne(id: string) {
    const participant = await this.prisma.participant.findUnique({
      where: {
        id,
      },
      select: ParticipantSelect,
    });
    if (!participant) {
      throw new BadRequestException('Participant not found');
    }
    return participant;
  }

  /*update(id: string, input: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  remove(id: string) {
    return `This action removes a #${id} participant`;
  }*/
}
