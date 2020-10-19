import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';

import { scheduleProvider } from './../providers/schedule.provider';
import { ScheduleController } from '../controllers/schedule.controller';
import { ScheduleService } from '../services/schedule.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ScheduleController],
    providers: [ScheduleService, ...scheduleProvider]
})

export class ScheduleModule { }