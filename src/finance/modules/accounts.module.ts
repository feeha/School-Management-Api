import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { AccountsController } from '../controllers/accounts.controller';
import { accountProvider } from '../providers/accounts.provider';
import { AccountsService } from './../services/accounts.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AccountsController],
    providers: [AccountsService, ...accountProvider]
})

export class AccountsModule { }