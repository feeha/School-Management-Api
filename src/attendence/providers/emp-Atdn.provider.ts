import { Connection } from 'mongoose';
import { EmpAtdnSchema } from './../schemas/emp-Atdn.schema';

export const empAtdnProvider =[
    {
        provide: 'EMP_ATDN_MODEL',
        useFactory: (connection: Connection) => connection.model('empAtdn', EmpAtdnSchema),
        inject: ['DATABASE_CONNECTION']
    },
];