import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { PenaltiesController } from '../controllers/penalties.controller';
import { penaltiesProvider } from '../providers/penalties.provider';
import { PenaltiesService } from './../services/penalties.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PenaltiesController],
    providers: [PenaltiesService, ...penaltiesProvider]
})

export class PenaltiesModule { }