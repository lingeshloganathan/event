import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketFilterDto } from './dto/ticket-filter.dto';
import { Prisma } from '@prisma/client';
import { TicketSelect } from 'src/queryselect';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

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

  async findOne(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: {
        id,
        recordStatus: { not: 'DELETED' },
        status: 'VALIDATED',
      },
      select: TicketSelect,
    });
    if (!ticket) {
      throw new BadRequestException('Ticket not found');
    }
    return ticket;
  }

  async getQrCode(eventId: string, qrCode: string) {
    const ticket = await this.prisma.ticket.findFirst({
      where: {
        id: eventId,
        qrCode,
        recordStatus: { not: 'DELETED' },
        status: 'VALIDATED',
      },
      select: TicketSelect,
    });
    if (!ticket) {
      throw new BadRequestException('Ticket not found');
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
