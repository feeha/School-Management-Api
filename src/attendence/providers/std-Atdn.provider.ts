import { Connection } from 'mongoose';
import { StdAtdnSchema } from './../schemas/std-Atdn.schema';

export const stdAtdnProvider = [
    {
        provide: 'STD_ATDN_MODEL',
        useFactory: (connection: Connection) => connection.model('stdAtdn', StdAtdnSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];