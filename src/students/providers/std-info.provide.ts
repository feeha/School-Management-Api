import { Connection } from 'mongoose';
import { StdInfoSchema } from './../schemas/std-info.schema';

export const stdInfoProvider = [
    {
        provide: 'STD_INFO_MODEL',
        useFactory: (connection: Connection) => connection.model('stdInfo',StdInfoSchema),
        inject: ['DATABASE_CONNECTION']
    },
];