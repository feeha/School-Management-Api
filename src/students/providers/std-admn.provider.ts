import { Connection } from 'mongoose';
import { StdAdmnSchema } from './../schemas/std-admn.schema';

export const stdAdmnProvider = [
    {
        provide: 'STD_ADMN_MODEL',
        useFactory: (connection: Connection) => connection.model('stdAdmn', StdAdmnSchema),
        inject: ['DATABASE_CONNECTION']
    },
];