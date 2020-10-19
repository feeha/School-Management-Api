import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { reportProvider } from '../providers/report.provider';
import { ReportService } from './../services/report.service';
import { ReportController } from './../controllers/report.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ReportController],
    providers: [ReportService, ...reportProvider]
})

export class ReportModule { }