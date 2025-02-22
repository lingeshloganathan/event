import { IsEnum, IsNotEmpty } from 'class-validator';
import { StallStatus } from 'src/decorators/enum.dto';

export class UpdateStallDto {
  @IsEnum(StallStatus)
  @IsNotEmpty()
  status: StallStatus;
}
