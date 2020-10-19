import { Connection } from 'mongoose';
import { VanRegSchema } from '../schemas/van-reg.schema';

export const vanRegProvider = [
    {
        provide: 'VAN_REG_MODEL',
        useFactory: (connection: Connection) => connection.model('vanReg', VanRegSchema),
        inject: ['DATABASE_CONNECTION']
    },
];