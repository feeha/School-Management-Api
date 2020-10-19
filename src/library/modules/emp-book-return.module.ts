import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { EmpBookReturnController } from '../controllers/emp-book-return.controller';
import { empBookReturnProvider } from '../providers/emp-book-return.provider';
import { EmpBookReturnService } from './../services/emp-book-return.service';

@Module({
    imports: [DatabaseModule],
    controllers: [EmpBookReturnController],
    providers: [EmpBookReturnService, ...empBookReturnProvider]
})

export class EmpBookReturnModule { }