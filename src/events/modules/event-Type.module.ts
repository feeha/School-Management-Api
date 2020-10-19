import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { eventTypeProvider } from './../providers/event-Type.provider';
import { EventTypeService } from './../services/event-Type.service';
import { EventTypeController } from './../controllers/event-Type.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [EventTypeController],
    providers: [EventTypeService, ...eventTypeProvider]
})

export class EventTypeModule { }