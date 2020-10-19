import { Controller, Get, Post, Patch, Delete, Body, Param, } from '@nestjs/common';
import { NewsDto } from '../dtos/news.dto';
import { NewsService } from '../services/news.service';
import { News } from '../interfaces/news.interface';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Post('/create')
    async create(@Body() newsDto: NewsDto) {
        return this.newsService.create(newsDto);
    }
    @Get('/list')
    async findAll(): Promise<News[]> {
        return this.newsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.newsService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() newsDto: NewsDto) {
        return this.newsService.update(id, newsDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() newsDto: NewsDto) {
        return this.newsService.delete(id, newsDto);
    }
}
