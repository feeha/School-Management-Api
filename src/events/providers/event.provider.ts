import { Connection } from 'mongoose';
import { EventSchema } from './../schemas/event.schema';

export const eventProvider = [
    {
        provide: 'EVENT_MODEL',
        useFactory: (connection: Connection) => connection.model('event', EventSchema),
        inject: ['DATABASE_CONNECTION']
    },
];