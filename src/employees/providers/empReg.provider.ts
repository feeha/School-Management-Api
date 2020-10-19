import { Connection } from 'mongoose';
import { EmpRegSchema } from './../schemas/empReg.schema';

export const empRegProvider = [
    {
        provide: 'EMP_REG_MODEL',
        useFactory: (connection: Connection) => connection.model('empReg', EmpRegSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];