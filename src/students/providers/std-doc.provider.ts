import { Connection } from 'mongoose';
import { StdDocSchema } from './../schemas/std-doc.schema';

export const stdDocProvider = [
    {
        provide: 'STD_DOC_MODEL',
        useFactory: (connection: Connection) => connection.model('stdDoc', StdDocSchema),
        inject: ['DATABASE_CONNECTION']
    },
];