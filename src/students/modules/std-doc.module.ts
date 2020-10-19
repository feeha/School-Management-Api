import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { StdDocController } from './../controllers/std-doc.controller';
import { StdDocService } from '../services/std-doc.service';
import { stdDocProvider } from '../providers/std-doc.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [StdDocController],
    providers: [StdDocService, ...stdDocProvider]
})

export class StdDocModule { }         