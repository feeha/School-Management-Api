import { Connection } from 'mongoose';
import { EventTypeSchema } from './../schemas/event-Type.schema';

export const eventTypeProvider = [
    {
        provide: 'EVENT_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('eventType', EventTypeSchema),
        inject: ['DATABASE_CONNECTION']
    },
];