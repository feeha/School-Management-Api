import { Connection } from 'mongoose';
import { EmpBookReturnSchema } from './../schemas/emp-book-return.schema';

export const empBookReturnProvider = [
    {
        provide: 'EMP_BOOK_RETURN_MODEL',
        useFactory: (connection: Connection) => connection.model('empBookReturn', EmpBookReturnSchema),
        inject: ['DATABASE_CONNECTION']
    },
];