import { RoleType } from '@prisma/client';
import { IsEnum, IsString, MaxLength } from 'class-validator';

export class VerifyOTPDto {
  @IsString()
  @MaxLength(10)
  phoneNumber: string;

  @IsString()
  @MaxLength(6)
  otp: string;

  @IsEnum(RoleType)
  roleType: RoleType;
}
