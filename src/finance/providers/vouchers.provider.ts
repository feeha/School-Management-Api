import { Connection } from 'mongoose';
import { VouchersSchema } from './../schemas/vouchers.schema';

export const vouchersProvider = [
    {
        provide: 'VOUCHERS_MODEL',
        useFactory: (connection: Connection) => connection.model('vouchers', VouchersSchema),
        inject: ['DATABASE_CONNECTION']
    },
];