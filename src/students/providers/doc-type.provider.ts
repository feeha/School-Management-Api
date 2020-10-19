import { Connection } from 'mongoose';
import { DocTypeSchema } from './../schemas/doc-type.schema';

export const docTypeProvider = [
    {
        provide: 'DOC_TYPE_MODEL',
        useFactory: (connection: Connection) => connection.model('docType', DocTypeSchema),
        inject: ['DATABASE_CONNECTION']
    },
];