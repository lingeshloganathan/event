import { EventType, RegistrationType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(EventType)
  eventType: EventType;

  @IsOptional()
  @IsEnum(RegistrationType)
  registrationType: RegistrationType;

  @IsOptional()
  @IsString()
  venueId: string;
}
