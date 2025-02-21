import { IsOptional, IsString } from 'class-validator';

export class TicketFilterDto {
  @IsOptional()
  @IsString()
  eventId: string;
}

export class TicketQrCodeDto {
  @IsString()
  qrCode: string;
}
