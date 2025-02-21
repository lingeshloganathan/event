import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategorySelect } from 'src/queryselect';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.category.findMany({
      where: {
        parentId: null,
        recordStatus: { not: 'DELETED' },
      },
      select: CategorySelect,
    });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id, recordStatus: { not: 'DELETED' } },
      select: CategorySelect,
    });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return category;
  }
}
