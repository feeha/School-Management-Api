import { Connection } from 'mongoose';
import { BooksSchema } from './../schemas/books.schema';

export const booksProvider = [
    {
        provide: 'BOOKS_MODEL',
        useFactory: (connection: Connection) => connection.model('books', BooksSchema),
        inject: ['DATABASE_CONNECTION']
    },
];