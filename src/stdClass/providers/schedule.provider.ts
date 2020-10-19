import { Connection, Model } from 'mongoose';
import { ScheduleSchema } from '../schemas/schedule.schema';

export const scheduleProvider = [
    {
        provide: 'SCHEDULE_MODEL',
        useFactory: (connection: Connection) => connection.model('schedule', ScheduleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];