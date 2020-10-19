import { Connection } from 'mongoose';
import { EmpTypeSchema } from './../schemas/empType.schema';

export const empTypeProvider = [
    {
        provide: 'EMP_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('empType', EmpTypeSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];