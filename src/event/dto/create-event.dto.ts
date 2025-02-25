import { EventType, RegistrationType } from '@prisma/client';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinDate,
} from 'class-validator';

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

  @IsOptional()
  @IsDateString()
  date: string; // Required for SINGLE_DAY

  @IsOptional()
  @IsArray()
  @IsDateString()
  @MinDate(new Date(), {
    each: true,
    message: 'Each custom date must be today or later',
  })
  customDates: string[]; // For CUSTOM_DATE events

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  recurringDays: string[]; // For RECURRING events (e.g., ["Monday", "Wednesday"])

  @IsOptional()
  @IsDateString()
  startDate: string; // For SEASONAL, ALL_DAYS

  @IsOptional()
  @IsDateString()
  endDate: string; // For SEASONAL, ALL_DAYS

  @IsOptional()
  @IsDateString()
  annualYearsCount: number; // For ANNUAL events

  @IsNotEmpty()
  @IsString()
  venueId: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;
}
