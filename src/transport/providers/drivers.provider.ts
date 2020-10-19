import { Connection } from 'mongoose';
import { DriversSchema } from './../schemas/drivers.schema';

export const driversProvider = [
    {
        provide: 'DRIVER_MODEL',
        useFactory: (connection: Connection) => connection.model('driver', DriversSchema),
        inject: ['DATABASE_CONNECTION']
    },
];