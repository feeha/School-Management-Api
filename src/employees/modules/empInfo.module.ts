import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { EmpInfoController } from './../controllers/empInfo.controller';
import { EmpInfoService } from './../services/empInfo.service';
import { empInfoProvider } from './../providers/empInfo.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [EmpInfoController],
    providers: [EmpInfoService, ...empInfoProvider]
})
export class EmpInfoModule { }

