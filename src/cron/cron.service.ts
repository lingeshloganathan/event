import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CronService {
  constructor(private readonly prisma: PrismaService) {}

  async updateTicketStatus() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tickets = await this.prisma.ticket.findMany({
      where: {
        status: 'VALIDATED',
        selectedDates: {
          hasEvery: [today],
        },
      },
      select: { id: true },
    });
    if (tickets.length > 0) {
      await this.prisma.ticket.updateMany({
        where: { id: { in: tickets.map((ticket) => ticket.id) } },
        data: { status: 'CANCELLED' },
      });
    }
  }
}
