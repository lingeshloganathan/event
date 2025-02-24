import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketFilterDto, TicketQrCodeDto } from './dto/ticket-filter.dto';
import { Prisma, RoleType } from '@prisma/client';
import { TicketSelect } from 'src/queryselect';
import { _User } from 'src/interface';
import { EventService } from 'src/event/event.service';

@Injectable()
export class TicketService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventService: EventService,
  ) {}

  async findAll(input: TicketFilterDto) {
    const where: Prisma.TicketWhereInput = {
      recordStatus: { not: 'DELETED' },
      status: 'VALIDATED',
    };
    if (input.eventId) {
      where.eventId = input.eventId;
    }
    return this.prisma.ticket.findMany({
      where,
      select: TicketSelect,
    });
  }

  async findOne(id: string, user: _User) {
    const where: Prisma.TicketWhereUniqueInput = {
      id,
      recordStatus: { not: 'DELETED' },
      status: 'VALIDATED',
    };
    if (user.role.name === RoleType.ATTENDEE) {
      where.userId = user.id;
    }
    const ticket = await this.prisma.ticket.findUnique({
      where,
      select: TicketSelect,
    });
    if (!ticket) {
      throw new BadRequestException('Ticket not found');
    }
    return ticket;
  }

  async getQrCode(eventId: string, input: TicketQrCodeDto) {
    await this.eventService.findOne(eventId);
    const ticket = await this.prisma.ticket.findFirst({
      where: {
        eventId: eventId,
        qrCode: input.qrCode,
        recordStatus: { not: 'DELETED' },
        status: 'VALIDATED',
      },
      select: TicketSelect,
    });
    if (!ticket) {
      throw new BadRequestException('Ticket not found');
    }
    if (ticket.selectedDates && ticket.selectedDates.length > 0) {
      const today = new Date().toISOString().split('T')[0];
      const isDateValid = ticket.selectedDates.some(
        (date) => new Date(date).toISOString().split('T')[0] === today,
      );
      if (!isDateValid) {
        throw new BadRequestException('Ticket is not valid for today');
      }
    }
    return ticket;
  }

  /*async remove(id: string) {
    await this.findOne(id);
    return this.prisma.ticket.update({
      where: {
        id,
      },
      data: {
        recordStatus: 'DELETED',
      },
      select: 
    });
  }*/
}
