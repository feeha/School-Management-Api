import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { empAtdnProvider } from './../providers/emp-Atdn.provider';
import { EmpAtdnService } from './../services/emp-Atdn.service';
import { EmpAtdnController } from './../controllers/emp-Atdn.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [EmpAtdnController],
    providers: [EmpAtdnService, ...empAtdnProvider]
})

export class EmpAtdnModule { }