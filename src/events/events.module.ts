import { Module } from '@nestjs/common';
import { ParticipationModule } from './modules/participation.module';
import { EventTypeModule } from './modules/event-Type.module';
import { EventModule } from './modules/event.module';
import { ParticipantTypeModule } from './modules/participant-Type.module';

@Module({
    imports: [EventModule, EventTypeModule, ParticipationModule, ParticipantTypeModule]
})

export class EventsModule { }