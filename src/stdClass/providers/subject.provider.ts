import { SubjectsSchema } from '../schemas/subject.schema';
import { Connection, Model } from 'mongoose';

export const subjectsProvider = [
    {
        provide: 'SUBJECTS_MODEL',
        useFactory: (connection: Connection) => connection.model('subject', SubjectsSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];