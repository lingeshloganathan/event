import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStallDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  eventId: string;
}
