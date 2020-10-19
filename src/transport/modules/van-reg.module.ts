import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';

import { VanRegController } from '../controllers/van-reg.controller';
import { VanRegService } from '../services/van-reg.service';
import { vanRegProvider } from './../providers/van-reg.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [VanRegController],
    providers: [VanRegService, ...vanRegProvider]
})

export class VanRegModule { }