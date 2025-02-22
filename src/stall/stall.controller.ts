import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { StallService } from './stall.service';
import { CreateStallDto } from './dto/create-stall.dto';
import { UpdateStallDto } from './dto/update-stall.dto';
import { FilterStallDto } from './dto/filter-stall.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { JwtGuard } from 'src/guard/jwt-guard';
import { _User } from 'src/interface';
import { Permissions } from 'src/guard/permission';
import {
  CREATE_STALL,
  READ_ALL_STALL,
  READ_STALL,
  UPDATE_STALL,
} from 'script/const/permission.const';
import { PermissionGuard } from 'src/guard/permission-guard';

@Controller('stall')
@UseGuards(JwtGuard, PermissionGuard)
export class StallController {
  constructor(private readonly stallService: StallService) {}

  @Permissions(CREATE_STALL)
  @Post()
  async create(@Body() input: CreateStallDto, @CurrentUser() user: _User) {
    const data = await this.stallService.create(input, user);
    return {
      message: 'Stall created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_STALL)
  @Get()
  async findAll(@Query() filter: FilterStallDto) {
    const data = await this.stallService.findAll(filter);
    return {
      message: 'Stall fetched successfully',
      data,
    };
  }

  @Permissions(READ_STALL)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.stallService.findOne(id);
    return {
      message: 'Stall fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_STALL)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateStallDto) {
    const data = await this.stallService.update(id, input);
    return {
      message: 'Stall updated successfully',
      data,
    };
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.stallService.remove(+id);
  }*/
}
