import { Connection } from 'mongoose';
import { FeeTypeSchema } from './../schemas/fee-type.schema';

export const feeTypeProvider = [
    {
        provide: 'FEE_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('feeType', FeeTypeSchema),
        inject: ['DATABASE_CONNECTION']
    },
];