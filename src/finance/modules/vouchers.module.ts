import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { VouchersService } from './../services/vouchers.service';
import { VouchersController } from './../controllers/vouchers.controller';
import { vouchersProvider } from '../providers/vouchers.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [VouchersController],
    providers: [VouchersService, ...vouchersProvider]
})

export class VouchersModule { }