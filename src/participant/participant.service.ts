import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { EventService } from 'src/event/event.service';
import { FilterParticipantDto } from './dto/filter-dto';
import { ParticipantSelect } from 'src/queryselect';
import { _User } from 'src/interface';

@Injectable()
export class ParticipantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventService: EventService,
  ) {}

  async create(input: CreateParticipantDto, user: _User) {
    const event = await this.eventService.findOne(input.eventId);
    const count = await this.prisma.participant.count({
      where: {
        eventId: input.eventId,
      },
    });
    if (count === event.venue?.capacity) {
      throw new BadRequestException('Regitration over');
    }

    const ticketData: Prisma.TicketCreateInput = {
      user: {
        connect: {
          id: user.id,
        },
      },
      event: {
        connect: {
          id: input.eventId,
        },
      },
      qrCode: `TICKET-${count + 1}`,
    };
    if (event.eventType === 'SINGLE_DAY') {
      if (input.selectedDates.length > 1) {
        throw new BadRequestException(
          'Single day event cannot have multiple dates',
        );
      }
    }
    //validate selected dates
    let selectedDates: Date[] = [];
    if (input.selectedDates.length > 0) {
      selectedDates = input.selectedDates.map((date) => new Date(date));
      const validDates = event.recurringDates.map((date) => new Date(date));
      const isDateValid = selectedDates.every((date) =>
        validDates.some(
          (validDate) =>
            validDate.toISOString().split('T')[0] ===
            date.toISOString().split('T')[0],
        ),
      );
      if (!isDateValid) {
        throw new BadRequestException(
          'One or more selected dates are not valid for this event',
        );
      }
      ticketData.selectedDates = selectedDates;
    }
    const data: Prisma.ParticipantCreateInput = {
      name: input.name,
      user: {
        connect: {
          id: user.id,
        },
      },
      event: {
        connect: {
          id: input.eventId,
        },
      },
      ticket: {
        create: ticketData,
      },
    };
    const participant = await this.prisma.participant.create({
      data,
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
