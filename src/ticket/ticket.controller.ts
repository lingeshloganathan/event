import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async findAll() {
    const data = await this.ticketService.findAll();
    return {
      message: 'Ticket fetched successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.ticketService.findOne(id);
    return {
      message: 'Ticket fetched successfully',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.ticketService.remove(id);
    return {
      message: 'Ticket deleted successfully',
      data,
    };
  }
}
