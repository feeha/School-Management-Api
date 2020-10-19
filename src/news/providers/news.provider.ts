import { Connection } from 'mongoose';
import { NewsSchema } from './../schemas/news.schema';

export const newsProvider = [
    {
        provide: 'NEWS_MODEL',
        useFactory: (connection: Connection) => connection.model('news', NewsSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];