import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VenueModule } from './venue/venue.module';
import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [AuthModule, VenueModule, CategoryModule, EventModule, TicketModule, ParticipantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
