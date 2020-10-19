import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { VoucherDetailController } from '../controllers/voucher-detail.controller';
import { VoucherDetailService } from '../services/voucher-detail.service';
import { voucherDetailProvider } from '../providers/voucher-detail.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [VoucherDetailController],
    providers: [VoucherDetailService, ...voucherDetailProvider]
})

export class VoucherDetailModule { }