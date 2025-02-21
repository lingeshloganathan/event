import { IsNotEmpty, IsString } from 'class-validator';
import { StallStatus } from '@prisma/client';

export class UpdateStallDto {
  @IsString()
  @IsNotEmpty()
  status: StallStatus;
}
