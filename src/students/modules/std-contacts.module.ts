import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { StdContactsService } from './../services/std-contacts.service';
import { StdContactsController } from '../controllers/std-contacts.controller';
import { stdContactsProvider } from '../providers/std-contacts.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [StdContactsController],
    providers: [StdContactsService, ...stdContactsProvider]
})

export class StdContactsModule { }