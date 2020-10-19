import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { eventProvider } from '../providers/event.provider';
import { EventService } from './../services/event.service';
import { EventController } from './../controllers/event.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [EventController],
    providers: [EventService, ...eventProvider]
})

export class EventModule { }