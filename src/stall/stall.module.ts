import { Module } from '@nestjs/common';
import { StallService } from './stall.service';
import { StallController } from './stall.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [StallController],
  providers: [StallService, PrismaService],
})
export class StallModule {}
