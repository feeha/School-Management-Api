import { Connection } from 'mongoose';
import { CertificateSchema } from '../schemas/certificate.schema';

export const certificateProvider = [
    {
        provide: 'CERTIFICATE_MODEL',
        useFactory: (connection: Connection) => connection.model('certificate', CertificateSchema),
        inject: ['DATABASE_CONNECTION']
    },
];