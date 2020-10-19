import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { newsProvider } from './../providers/news.provider';
import { NewsService } from './../services/news.service';
import { NewsController } from './../controllers/news.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [NewsController],
    providers: [NewsService, ...newsProvider]
})

export class SchoolNewsModule { }

