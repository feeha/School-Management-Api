import { Connection } from 'mongoose';
import { BookTypeSchema } from './../schemas/book-types.schema';

export const bookTypeProvider = [
    {
        provide: 'BOOK_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('bookType', BookTypeSchema),
        inject: ['DATABASE_CONNECTION']
    },
];