import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventService } from 'src/event/event.service';
import { EventModule } from 'src/event/event.module';
import { VenueModule } from 'src/venue/venue.module';

@Module({
  imports: [EventModule, VenueModule],
  controllers: [ParticipantController],
  providers: [ParticipantService, PrismaService],
})
export class ParticipantModule {}
