import { Connection } from 'mongoose';
import { AccountsSchema } from './../schemas/accounts.schema';

export const accountProvider = [
    {
        provide: 'ACCOUNTS_MODEL',
        useFactory: (connection: Connection) => connection.model('accounts', AccountsSchema),
        inject: ['DATABASE_CONNECTION']
    },
];