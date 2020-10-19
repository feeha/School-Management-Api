import { Connection } from 'mongoose';
import { VansSchema } from './../schemas/vans.schema';

export const vansProvider = [
    {
        provide: 'VANS_MODEL',
        useFactory: (connection: Connection) => connection.model('vans', VansSchema),
        inject: ['DATABASE_CONNECTION']
    },
];