import * as mongoose from 'mongoose';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb+srv://ma:Bmypt4ago94QOaIE@cluster0-cyoyg.mongodb.net/school-management?retryWrites=true&w=majority',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
    },
];

