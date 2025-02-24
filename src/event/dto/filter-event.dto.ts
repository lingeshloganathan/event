import { EventType, RegistrationType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class FilterEventDto {
  @IsOptional()
  @IsEnum(RegistrationType)
  registrationType: RegistrationType;

  @IsOptional()
  @IsEnum(EventType)
  eventType: EventType;

  @IsOptional()
  @IsString()
  venueId: string;
}
