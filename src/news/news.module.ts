import { Module } from '@nestjs/common';
import { NewsTypeModule } from './modules/news-type.module';
import { SchoolNewsModule } from './modules/school-news.module';

@Module({
    imports: [SchoolNewsModule, NewsTypeModule]
})

export class NewsModule { }