import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';

import { regPackagesProvider } from './../providers/reg-packages.provider';
import { RegPackagesService } from './../services/reg-packages.service';
import { RegPackagesController } from './../controllers/reg-packages.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [RegPackagesController],
    providers: [RegPackagesService, ...regPackagesProvider]
})

export class RegPackagesModule { }