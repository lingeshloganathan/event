import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUpdateSelect } from 'src/queryselect';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async update(id: string, input: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return await this.prisma.user.update({
      where: { id },
      data: {
        name: input.name,
        email: input.email,
        gender: input.gender,
      },
      select: UserUpdateSelect,
    });
  }
}
