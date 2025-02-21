import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  eventId: string;
}
