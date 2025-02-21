import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VenueModule } from './venue/venue.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [AuthModule, VenueModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
