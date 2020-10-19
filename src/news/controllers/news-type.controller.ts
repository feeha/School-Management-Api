import { Controller, Get, Post, Patch, Delete, Body, Param, } from '@nestjs/common';
import { NewsTypeService } from '../services/news-type.service';
import { NewsType } from '../interfaces/news-type.interface';
import { NewsTypeDto } from '../dtos/news-type.dto';

@Controller('newsType')
export class NewsTypeController {
    constructor(private readonly newstypeService: NewsTypeService) { }

    @Post('/create')
    async create(@Body() newsTypeDto: NewsTypeDto) {
        return this.newstypeService.create(newsTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<NewsType[]> {
        return this.newstypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.newstypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() newsTypeDto: NewsTypeDto) {
        return this.newstypeService.update(id, newsTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() newstypeDto: NewsTypeDto) {
        return this.newstypeService.delete(id, newstypeDto);
    }
}
