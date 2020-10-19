import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { BooksService } from './../services/books.service';
import { BooksDto } from './../dtos/books.dto';
import { Books } from './../interfaces/books.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post('/create')
    async create(@Body() booksDto: BooksDto) {
        return this.booksService.create(booksDto);
    }
    @Get('/list')
    async findAll(): Promise<Books[]> {
        return this.booksService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.booksService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() booksDto: BooksDto) {
        return this.booksService.update(id, booksDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() booksDto: BooksDto) {
        return this.booksService.delete(id, booksDto);
    }

}