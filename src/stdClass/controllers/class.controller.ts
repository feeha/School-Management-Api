import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ClassService } from '../services/class.service';
import { ClassDto } from '../dtos/class.dto';
import { Class } from '../interfaces/class.interface';

@Controller('class')
export class ClassController {
    constructor(private readonly classService: ClassService) { }

    @Post('/create')
    async create(@Body() classDto: ClassDto) {
        return await this.classService.create(classDto);
    }
    @Get('/list')
    async findAll(): Promise<Class[]> {
        return await this.classService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.classService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() classDto: ClassDto) {
        await this.classService.update(id, classDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() classDto: ClassDto) {
        return await this.delete(id, classDto);
    }
}