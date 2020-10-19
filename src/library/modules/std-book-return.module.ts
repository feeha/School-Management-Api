import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { StdBookReturnController } from '../controllers/std-book-return.controller';
import { stdBookReturnProvider } from '../providers/std-book-return.provider';
import { StdBookReturnService } from './../services/std-book-return.service';

@Module({
    imports: [DatabaseModule],
    controllers: [StdBookReturnController],
    providers: [StdBookReturnService, ...stdBookReturnProvider]
})

export class StdBookReturnModule { }