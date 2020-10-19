import { Connection } from 'mongoose';
import { RegPackagesSchema } from '../schemas/reg-packages.schema';

export const regPackagesProvider = [
    {
        provide: 'REG_PACKAGES_MODEL',
        useFactory: (connection: Connection) => connection.model('regPackages', RegPackagesSchema),
        inject: ['DATABASE_CONNECTION']
    },
];