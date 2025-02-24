import {
  ArrayNotEmpty,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateParticipantDto {
  @IsNotEmpty()
  @IsString()
  eventId: string;

  @IsOptional()
  @ArrayNotEmpty()
  @IsDateString()
  selectedDates: string[];
}
