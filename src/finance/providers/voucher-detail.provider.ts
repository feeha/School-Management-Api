import { Connection } from 'mongoose';
import { VoucherDetailSchema } from './../schemas/voucher-detail.schema';

export const voucherDetailProvider = [
    {
        provide: 'VOUCHER_DETAIL_MODEL',
        useFactory: (connection: Connection) => connection.model('voucherDetail', VoucherDetailSchema),
        inject: ['DATABASE_CONNECTION']
    },
];