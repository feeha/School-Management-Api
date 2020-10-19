import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { StdBookIssuranceController } from '../controllers/std-book-issurance.controller';
import { StdBookIssuranceService } from '../services/std-book-issurance.service';
import { stdBookIssuranceProvider } from '../providers/std-book-issurance.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [StdBookIssuranceController],
    providers: [StdBookIssuranceService, ...stdBookIssuranceProvider]
})

export class StdBookIssuanceModule {}