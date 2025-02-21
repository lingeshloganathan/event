import { IsOptional, IsString } from 'class-validator';

export class FilterGuestDto {
  @IsString()
  @IsOptional()
  eventId: string;
}
