import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { DocTypeService } from './../services/doc-type.service';
import { DocTypeDto } from './../dtos/doc-type.dto';
import { DocType } from './../interfaces/doc-type.interface';

@Controller('docType')
export class DoctypeController {
    constructor(private readonly DocTypeService: DocTypeService) { }

    @Post('/create')
    async create(@Body() doctypeDto: DocTypeDto) {
        return await this.DocTypeService.create(doctypeDto);
    }
    @Get('/list')
    async findAll(): Promise<DocType[]> {
        return await this.DocTypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.DocTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() doctypeDto: DocTypeDto) {
        return await this.DocTypeService.update(id, doctypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() doctypeDto: DocTypeDto) {
        return await this.DocTypeService.delete(id, doctypeDto);
    }
}
