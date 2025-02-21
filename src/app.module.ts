import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VenueModule } from './venue/venue.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [AuthModule, VenueModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
