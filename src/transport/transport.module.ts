import { Module } from '@nestjs/common';

import { PessengerTypeModule } from './modules/pessenger-type.module';
import { DriversModule } from './modules/drivers.module';
import { RegPackagesModule } from './modules/reg-packages.module';
import { VanRegModule } from './modules/van-reg.module';
import { VansModule } from './modules/vans.module';


@Module({
    imports: [DriversModule, PessengerTypeModule, RegPackagesModule, VanRegModule, VansModule]
    
})

export class TransportModule { }