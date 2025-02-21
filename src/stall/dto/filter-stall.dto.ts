import { IsOptional, IsString } from 'class-validator';

export class FilterStallDto {
  @IsString()
  @IsOptional()
  eventId: string;

  @IsString()
  @IsOptional()
  userId: string;
}
