import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';

import { classProvider } from '../providers/class.provider';
import { ClassService } from '../services/class.service';
import { ClassController } from '../controllers/class.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ClassController],
    providers: [ClassService, ...classProvider]
})

export class ClassModule { }