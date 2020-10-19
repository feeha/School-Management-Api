import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { empRegProvider } from './../providers/empReg.provider';
import { EmpRegService } from './../services/empReg.service';
import { EmpRegController } from './../controllers/empReg.comtoller';

@Module({
    imports: [DatabaseModule],
    controllers: [EmpRegController],
    providers: [EmpRegService, ...empRegProvider]
})

export class EmpRegModule { }