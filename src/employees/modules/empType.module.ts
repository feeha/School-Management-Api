import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { empTypeProvider } from './../providers/empType.provider';
import { EmpTypeService } from './../services/empType.service';
import { EmpTypeController } from './../controllers/empType.controller';


@Module(
    {
        imports: [DatabaseModule],
        controllers: [EmpTypeController],
        providers: [EmpTypeService, ...empTypeProvider]
    }
)

export class EmpTypeModule { }