import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { SectionService } from '../services/section.service';
import { SectionDto } from '../dtos/section.dto';
import { Section } from '../interfaces/section.interface';

@Controller('section')
export class SectionController {
    constructor(private readonly sectionService: SectionService) { }

    @Post('/create')
    async create(@Body() sectionDto: SectionDto) {
        return await this.sectionService.create(sectionDto);
    }
    @Get('/list')
    async findAll(): Promise<Section[]> {
        return await this.sectionService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.sectionService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() sectionDto: SectionDto) {
        await this.sectionService.update(id, sectionDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() sectionDto: SectionDto) {
        return await this.sectionService.delete(id, sectionDto);
    }
}