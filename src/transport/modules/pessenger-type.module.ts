import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';

import { pessengerTypeProvider } from './../providers/pessenger-type.provider';
import { PessengerTypeService } from './../services/pessenger-type.service';
import { PessengerTypeController } from './../controllers/pessenger-type.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [PessengerTypeController],
    providers: [PessengerTypeService, ...pessengerTypeProvider]
})

export class PessengerTypeModule { }