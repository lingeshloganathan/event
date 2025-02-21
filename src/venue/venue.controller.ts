import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { JwtGuard } from 'src/guard/jwt-guard';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() input: CreateVenueDto) {
    return await this.venueService.create(input);
  }

  @Get()
  async findAll() {
    return await this.venueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.venueService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateVenueDto) {
    return await this.venueService.update(id, input);
  }
}
