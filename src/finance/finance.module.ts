import { Module } from '@nestjs/common';

import { AccountsModule } from './modules/accounts.module';
import { FeeTypeModule } from './modules/fee-type.module';
import { ReportModule } from './modules/report.module';
import { VoucherDetailModule } from './modules/voucher-detail.module';
import { VouchersModule } from './modules/vouchers.module';


@Module({
    imports: [
        AccountsModule,
        FeeTypeModule,
        ReportModule,
        VouchersModule,
        VoucherDetailModule
    ]

})

export class FinanceModule { }