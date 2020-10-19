import { Connection } from 'mongoose';
import { PenaltiesSchema } from './../schemas/penalties.schema';

export const penaltiesProvider = [
    {
        provide: 'PENALTIES_MODEL',
        useFactory: (connection: Connection) => connection.model('penalties', PenaltiesSchema),
        inject: ['DATABASE_CONNECTION']
    },
];