import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { VenueModule } from 'src/venue/venue.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [VenueModule, CategoryModule],
  controllers: [EventController],
  providers: [EventService, PrismaService],
  exports: [EventService],
})
export class EventModule {}
