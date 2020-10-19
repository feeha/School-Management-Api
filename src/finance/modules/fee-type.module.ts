import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { FeeTypeController } from '../controllers/fee-type.controller';
import { feeTypeProvider } from '../providers/fee-type.provider';
import { FeeTypeService } from './../services/fee-type.service';

@Module({
    imports: [DatabaseModule],
    controllers: [FeeTypeController],
    providers: [FeeTypeService, ...feeTypeProvider]
})

export class FeeTypeModule { }