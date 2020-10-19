import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { DocTypeService } from './../services/doc-type.service';
import { DoctypeController } from './../controllers/doc-type.controller';
import { docTypeProvider } from '../providers/doc-type.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [DoctypeController],
    providers: [DocTypeService, ...docTypeProvider]
})

export class DocTypeModule { }