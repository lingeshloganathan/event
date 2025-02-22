import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  READ_ALL_CATEGORY,
  READ_CATEGORY,
} from 'script/const/permission.const';
import { Permissions } from 'src/guard/permission';
import { JwtGuard } from 'src/guard/jwt-guard';
import { PermissionGuard } from 'src/guard/permission-guard';

@Controller('category')
@UseGuards(JwtGuard, PermissionGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Permissions(READ_ALL_CATEGORY)
  @Get()
  async findAll() {
    const data = await this.categoryService.findAll();
    return {
      message: 'Category fetched successfully',
      data,
    };
  }

  @Permissions(READ_CATEGORY)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.categoryService.findOne(id);
    return {
      message: 'Category fetched successfully',
      data,
    };
  }
}
