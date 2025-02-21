import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class sendOtpInputDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  phoneNumber: string;
}
