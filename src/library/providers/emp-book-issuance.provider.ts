import { Connection } from 'mongoose';
import { EmpBookIssuranceSchema } from './../schemas/emp-book-issuance.schema';

export const empBookIssuranceProvider = [
    {
        provide: 'EMP_BOOK_ISSURANCE_MODEL',
        useFactory: (connection: Connection) => connection.model('empBookIssurance', EmpBookIssuranceSchema),
        inject: ['DATABASE_CONNECTION']
    },
];