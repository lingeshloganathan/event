import { Controller, Get, Param, Query, Body, UseGuards } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketFilterDto, TicketQrCodeDto } from './dto/ticket-filter.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { _User } from 'src/interface';
import { Permissions } from 'src/guard/permission';
import {
  READ_ALL_TICKET,
  READ_TICKET,
  READ_TICKET_BY_QR_CODE,
} from 'script/const/permission.const';
import { JwtGuard } from 'src/guard/jwt-guard';
import { PermissionGuard } from 'src/guard/permission-guard';

@Controller('tickets')
// @UseGuards(JwtGuard, PermissionGuard)
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Permissions(READ_ALL_TICKET)
  @Get()
  async findAll(@Query() input: TicketFilterDto) {
    const data = await this.ticketService.findAll(input);
    return {
      message: 'Ticket fetched successfully',
      data,
    };
  }

  @Permissions(READ_TICKET)
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: _User) {
    const data = await this.ticketService.findOne(id, user);
    return {
      message: 'Ticket fetched successfully',
      data,
    };
  }

  @Permissions(READ_TICKET_BY_QR_CODE)
  @Get('qrcode/:id')
  async getQrCode(
    @Param('id') eventId: string,
    // @Body() input: TicketQrCodeDto,
    @Query() input: TicketQrCodeDto,
  ) {
    const data = await this.ticketService.getQrCode(eventId, input);
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
