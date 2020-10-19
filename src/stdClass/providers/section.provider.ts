import { Connection, Model } from 'mongoose';
import { SectionSchema } from '../schemas/section.schema';

export const sectionProvider = [
    {
        provide: 'SECTION_MODEL',
        useFactory: (connection: Connection) => connection.model('section', SectionSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];