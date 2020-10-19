import { Connection } from 'mongoose';
import { ParticipantTypeSchema } from './../schemas/participant-Type.schema';

export const participantTypeProvider = [
    {
        provide: 'PARTICIPANT_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('participantType', ParticipantTypeSchema),
        inject: ['DATABASE_CONNECTION']
    },
];