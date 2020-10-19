import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { newsTypeProvider } from './../providers/news-type.provider';
import { NewsTypeService } from './../services/news-type.service';
import { NewsTypeController } from './../controllers/news-type.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [NewsTypeController],
    providers: [NewsTypeService, ...newsTypeProvider]
})

export class NewsTypeModule { }