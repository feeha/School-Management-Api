import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { ParticipantTypeController } from '../controllers/participant-Type.controller';
import { ParticipantTypeService } from '../services/participant-Type.service';
import { participantTypeProvider } from '../providers/participant-Type.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ParticipantTypeController],
    providers: [ParticipantTypeService, ...participantTypeProvider]
})

export class ParticipantTypeModule { }