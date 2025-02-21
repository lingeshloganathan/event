import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventModule } from 'src/event/event.module';

@Module({
  imports: [EventModule],
  controllers: [GuestController],
  providers: [GuestService, PrismaService],
})
export class GuestModule {}
