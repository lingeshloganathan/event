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
  @MinDate(new Date(), { message: 'Date must be today or in the future' })
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
  @MinDate(new Date(), { message: 'Start date must be today or in the future' })
  startDate: string; // For SEASONAL, ALL_DAYS

  @IsOptional()
  @IsDateString()
  @MinDate(new Date(), { message: 'End date must be today or in the future' })
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
