import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { StdAdmnService } from './../services/std-admn.service';
import { StdAdmnController } from './../controllers/std-admn.controller';
import { stdAdmnProvider } from '../providers/std-admn.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [StdAdmnController],
    providers: [StdAdmnService, ...stdAdmnProvider]
})

export class StdAdmnModule { }