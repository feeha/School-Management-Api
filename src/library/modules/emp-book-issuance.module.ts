import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { EmpBookIssuranceController } from '../controllers/emp-book-issuance.controller';
import { EmpBookIssuranceService } from '../services/emp-book-issuance.service';
import { empBookIssuranceProvider } from '../providers/emp-book-issuance.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [EmpBookIssuranceController],
    providers: [EmpBookIssuranceService, ...empBookIssuranceProvider]
})

export class EmpBookIssuanceModule { }