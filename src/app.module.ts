import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VenueModule } from './venue/venue.module';
import { CategoryModule } from './category/category.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { ParticipantModule } from './participant/participant.module';
import { GuestModule } from './guest/guest.module';
import { StallModule } from './stall/stall.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    VenueModule,
    CategoryModule,
    EventModule,
    TicketModule,
    ParticipantModule,
    GuestModule,
    StallModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
