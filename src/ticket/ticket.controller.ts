import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketFilterDto } from './dto/ticket-filter.dto';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async findAll(@Query() input: TicketFilterDto) {
    const data = await this.ticketService.findAll(input);
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

  @Get('qrcode/:id')
  async getQrCode(@Param('id') eventId: string, @Query() qrCode: string) {
    const data = await this.ticketService.getQrCode(eventId, qrCode);
    return {
      message: 'Ticket QR code fetched successfully',
      data,
    };
  }

  /*@Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.ticketService.remove(id);
    return {
      message: 'Ticket deleted successfully',
      data,
    };
  }*/
}
