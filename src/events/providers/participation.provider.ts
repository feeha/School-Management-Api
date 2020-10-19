import { Connection } from 'mongoose';
import { ParticipationSchema } from './../schemas/participation.schema';

export const participationProvider = [
    {
        provide: 'PARTICIPATION_MODEL',
        useFactory: (connection: Connection) => connection.model('participation', ParticipationSchema),
        inject: ['DATABASE_CONNECTION']
    },
];