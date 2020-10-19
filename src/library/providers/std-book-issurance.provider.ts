import { Connection } from 'mongoose';
import { StdBookIssuranceSchema } from './../schemas/std-book-issurance.schema';

export const stdBookIssuranceProvider = [
    {
        provide: 'STD_BOOK_ISSURANCE_MODEL',
        useFactory: (connection: Connection) => connection.model('stdBookIssurance', StdBookIssuranceSchema),
        inject: ['DATABASE_CONNECTION']
    },
];