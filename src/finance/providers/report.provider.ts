import { Connection } from 'mongoose';
import { ReportSchema } from './../schemas/report.schema';

export const reportProvider = [
    {
        provide: 'REPORT_MODEL',
        useFactory: (connection: Connection) => connection.model('report', ReportSchema),
        inject: ['DATABASE_CONNECTION']
    },
];