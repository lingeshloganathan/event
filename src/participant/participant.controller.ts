import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { FilterParticipantDto } from './dto/filter-dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  async create(@Body() input: CreateParticipantDto, @CurrentUser() user: User) {
    const data = await this.participantService.create(input, user);
    return {
      message: 'Participant created successfully',
      data,
    };
  }

  @Get()
  async findAll(@Query() input: FilterParticipantDto) {
    const data = await this.participantService.findAll(input);
    return {
      message: 'Participant fetched successfully',
      data,
    };
  }

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
