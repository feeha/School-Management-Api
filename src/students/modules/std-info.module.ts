import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { stdInfoProvider } from './../providers/std-info.provide';
import { StdInfoService } from './../services/std-info.service';
import { StdInfoController } from './../controllers/std-info.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [StdInfoController],
    providers: [StdInfoService, ...stdInfoProvider]
})

export class StdInfoModule { }