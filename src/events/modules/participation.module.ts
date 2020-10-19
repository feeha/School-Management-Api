import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { ParticipationController } from '../controllers/participation.controller';
import { ParticipationService } from '../services/participation.service';
import { participationProvider } from '../providers/participation.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ParticipationController],
    providers: [ParticipationService, ...participationProvider]
})

export class ParticipationModule { }