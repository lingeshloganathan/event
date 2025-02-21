import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { StallService } from './stall.service';
import { CreateStallDto } from './dto/create-stall.dto';
import { UpdateStallDto } from './dto/update-stall.dto';
import { FilterStallDto } from './dto/filter-stall.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/guard/jwt-guard';

@Controller('stall')
export class StallController {
  constructor(private readonly stallService: StallService) {}

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() input: CreateStallDto, @CurrentUser() user: User) {
    const data = await this.stallService.create(input, user);
    return {
      message: 'Stall created successfully',
      data,
    };
  }

  @Get()
  async findAll(@Query() filter: FilterStallDto) {
    const data = await this.stallService.findAll(filter);
    return {
      message: 'Stall fetched successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.stallService.findOne(id);
    return {
      message: 'Stall fetched successfully',
      data,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateStallDto) {
    return this.stallService.update(id, input);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.stallService.remove(+id);
  }*/
}
