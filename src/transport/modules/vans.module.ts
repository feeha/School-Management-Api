import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';

import { vansProvider } from './../providers/van.provider';
import { VansService } from './../services/vans.service';
import { VansController } from './../controllers/vans.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [VansController],
    providers: [VansService, ...vansProvider]
})

export class VansModule { }