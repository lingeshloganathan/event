import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CronController],
  providers: [CronService, PrismaService],
})
export class CronModule {}
