import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { Subjects } from '../interfaces/subject.interface';
import { SubjectsService } from '../services/subject.service';
import { SubjectsDto } from '../dtos/subject.dto';

@Controller('subjects')
export class SubjectsController {
    constructor(private readonly subjectsService: SubjectsService) { }

    @Post('/create')
    async create(@Body() subjectsDto: SubjectsDto) {
        return await this.subjectsService.create(subjectsDto);
    }
    @Get('/list')
    async findAll(): Promise<Subjects[]> {
        return await this.subjectsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.subjectsService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() subjectsDto: SubjectsDto) {
        await this.subjectsService.update(id, subjectsDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() subjectsDto: SubjectsDto) {
        return await this.subjectsService.delete(id, subjectsDto);
    }
}