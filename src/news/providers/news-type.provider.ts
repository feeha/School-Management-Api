import { Connection } from 'mongoose';
import { NewsTypeSchema } from '../schemas/news-type.schema';

export const newsTypeProvider = [
    {
        provide: 'NEWS_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('newsType', NewsTypeSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];