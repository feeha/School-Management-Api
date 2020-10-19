import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { stdAtdnProvider } from './../providers/std-Atdn.provider';
import { StdAtdnController } from './../controllers/std-Atdn.controller';
import { StdAtdnService } from './../services/std-Atdn.service';

@Module({
    imports: [DatabaseModule],
    controllers: [StdAtdnController],
    providers: [StdAtdnService, ...stdAtdnProvider]
})

export class StdAtdnModule { }