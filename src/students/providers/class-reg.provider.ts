import { Connection } from 'mongoose';
import { ClassRegSchema } from './../schemas/class-reg.schema';

export const classRegprovider = [
    {
        provide: 'CLASS_REG_MODEL',
        useFactory: (connection: Connection) => connection.model('classReg', ClassRegSchema),
        inject: ['DATABASE_CONNECTION']
    },
];