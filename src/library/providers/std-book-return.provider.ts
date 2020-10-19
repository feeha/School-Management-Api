import { Connection } from 'mongoose';
import { StdBookReturnSchema } from './../schemas/std-book-return.schema';

export const stdBookReturnProvider = [
    {
        provide: 'STD_BOOK_RETURN_MODEL',
        useFactory: (connection: Connection) => connection.model('stdBookReturn', StdBookReturnSchema),
        inject: ['DATABASE_CONNECTION']
    },
];