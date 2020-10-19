import { Connection } from 'mongoose';
import { PessengerTypeSchema } from './../schemas/pessenger-type.schema';

export const pessengerTypeProvider = [
    {
        provide: 'PESSENGER_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('pessengerType', PessengerTypeSchema),
        inject: ['DATABASE_CONNECTION']
    },
];