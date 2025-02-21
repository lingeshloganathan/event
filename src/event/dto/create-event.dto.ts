import { EventType, RegistrationType } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(EventType)
  @IsNotEmpty()
  eventType: EventType;

  @IsEnum(RegistrationType)
  @IsNotEmpty()
  registrationType: RegistrationType;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  venueId: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;
}
