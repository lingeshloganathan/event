import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { FilterParticipantDto } from './dto/filter-dto';
import { JwtGuard } from 'src/guard/jwt-guard';
import { _User } from 'src/interface';
import { Permissions } from 'src/guard/permission';
import {
  CREATE_PARTICIPANT,
  READ_ALL_PARTICIPANT,
  READ_PARTICIPANT,
} from 'script/const/permission.const';
import { PermissionGuard } from 'src/guard/permission-guard';

@Controller('participant')
@UseGuards(JwtGuard, PermissionGuard)
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Permissions(CREATE_PARTICIPANT)
  @Post()
  async create(
    @Body() input: CreateParticipantDto,
    @CurrentUser() user: _User,
  ) {
    const data = await this.participantService.create(input, user);
    return {
      message: 'Participant created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_PARTICIPANT)
  @Get()
  async findAll(@Query() input: FilterParticipantDto) {
    const data = await this.participantService.findAll(input);
    return {
      message: 'Participant fetched successfully',
      data,
    };
  }

  @Permissions(READ_PARTICIPANT)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.participantService.findOne(id);
    return {
      message: 'Participant fetched successfully',
      data,
    };
  }

  /*@Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateParticipantDto) {
    const data = await this.participantService.update(id, input);
    return {
      message: 'Participant updated successfully',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.participantService.remove(id);
    return {
      message: 'Participant deleted successfully',
      data,
    };
  }*/
}
