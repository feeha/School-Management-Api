import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { BookTypeService } from './../services/book-types.service';
import { BookType } from './../interfaces/book-types.interface';
import { BookTypeDto } from './../dtos/book-types.dto';

@Controller('bookType')
export class BookTypeController {
    constructor(private readonly bookTypeService: BookTypeService) { }

    @Post('/create')
    async create(@Body() bookTypeDto: BookTypeDto) {
        return this.bookTypeService.create(bookTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<BookType[]> {
        return this.bookTypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.bookTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() bookTypeDto: BookTypeDto) {
        return this.bookTypeService.update(id, bookTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() bookTypeDto: BookTypeDto) {
        return this.bookTypeService.delete(id, bookTypeDto);
    }

}