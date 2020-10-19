import { Connection } from 'mongoose';
import { StdContactsSchema } from './../schemas/std-contacts.schema';

export const stdContactsProvider = [
    {
        provide: 'STD_CONTACTS_MODEL',
        useFactory: (connection: Connection) => connection.model('stdContacts', StdContactsSchema),
        inject: ['DATABASE_CONNECTION']
    },
];