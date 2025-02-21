import { Module } from '@nestjs/common';
import { StallService } from './stall.service';
import { StallController } from './stall.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventModule } from 'src/event/event.module';

@Module({
  controllers: [StallController, EventModule],
  providers: [StallService, PrismaService],
})
export class StallModule {}
