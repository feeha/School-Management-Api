import { Connection } from 'mongoose';
import { EmpInfoSchema } from './../schemas/empInfo.schema';

export const empInfoProvider = [
    {
        provide: 'EMP_INFO_MODEL',
        useFactory: (connection: Connection) => connection.model('empInfo', EmpInfoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];