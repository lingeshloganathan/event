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
import { PermissionGuard } from 'src/guard/permission-guard';
import { Permissions } from 'src/guard/permission';
import {
  CREATE_VENUE,
  READ_ALL_VENUE,
  READ_VENUE,
  UPDATE_VENUE,
} from 'script/const/permission.const';

@Controller('venue')
@UseGuards(JwtGuard, PermissionGuard)
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Permissions(CREATE_VENUE)
  @Post()
  async create(@Body() input: CreateVenueDto) {
    const data = await this.venueService.create(input);
    return {
      message: 'Venue created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_VENUE)
  @Get()
  async findAll() {
    const data = await this.venueService.findAll();
    return {
      message: 'Venue fetched successfully',
      data,
    };
  }

  @Permissions(READ_VENUE)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.venueService.findOne(id);
    return {
      message: 'Venue fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_VENUE)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateVenueDto) {
    const data = await this.venueService.update(id, input);
    return {
      message: 'Venue updated successfully',
      data,
    };
  }
}
