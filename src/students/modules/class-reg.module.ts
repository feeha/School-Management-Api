import { ClassRegService } from './../services/class-reg.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';
import { ClassRegController } from '../controllers/class-reg.controller';
import { classRegprovider } from '../providers/class-reg.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ClassRegController],
    providers: [ClassRegService, ...classRegprovider]
})

export class ClassRegModule { }