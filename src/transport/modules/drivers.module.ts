import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';

import { driversProvider } from './../providers/drivers.provider';
import { DriversController } from './../controllers/drivers.controller';
import { DriversService } from './../services/drivers.service';

@Module({
    imports: [DatabaseModule],
    controllers: [DriversController],
    providers: [DriversService, ...driversProvider]
})

export class DriversModule { }