import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  async create(@Body() input: CreateVenueDto) {
    const data = await this.venueService.create(input);
    return {
      message: 'Venue created successfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.venueService.findAll();
    return {
      message: 'Venue fetched successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.venueService.findOne(id);
    return {
      message: 'Venue fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateVenueDto) {
    const data = await this.venueService.update(id, input);
    return {
      message: 'Venue updated successfully',
      data,
    };
  }
}
