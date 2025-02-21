import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.ticket.findMany({
      where: {
        recordStatus: { not: 'DELETED' },
      },
    });
  }

  async findOne(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: {
        id,
        recordStatus: { not: 'DELETED' },
      },
    });
    if (!ticket) {
      throw new BadRequestException('Ticket not found');
    }
    return ticket;
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.ticket.update({
      where: {
        id,
      },
      data: {
        recordStatus: 'DELETED',
      },
    });
  }
}
