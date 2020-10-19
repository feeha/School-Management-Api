import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';

import { subjectsProvider } from '../providers/subject.provider';
import { SubjectsService } from '../services/subject.service';
import { SubjectsController } from '../controllers/subject.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [SubjectsController],
    providers: [SubjectsService, ...subjectsProvider]
})

export class SubjectsModule { }