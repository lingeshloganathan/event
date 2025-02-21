import { IsOptional, IsString } from 'class-validator';

export class FilterParticipantDto {
  @IsOptional()
  @IsString()
  eventId: string;
}
