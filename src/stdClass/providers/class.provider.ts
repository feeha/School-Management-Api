import { Connection, Model } from 'mongoose';
import { ClassSchema } from '../schemas/class.schema';

export const classProvider = [
    {
        provide: 'CLASS_MODEL',
        useFactory: (connection: Connection) => connection.model('class', ClassSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];