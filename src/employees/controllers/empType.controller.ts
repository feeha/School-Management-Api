import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmpType } from './../interfaces/empType.interface';
import { EmpTypeService } from './../services/empType.service';
import { EmpTypeDto } from './../dtos/empType.dto';

@Controller('emptype')
export class EmpTypeController {
    constructor(private readonly empTypeService: EmpTypeService) { }

    @Post('/create')
    async create(@Body() empTypeDto: EmpTypeDto) {
        return this.empTypeService.create(empTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<EmpType[]> {
        return this.empTypeService.findAll();
    }
    @Get(':id')
    async find(@Param('id') id: string) {
        return this.empTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() empTypeDto: EmpTypeDto) {
        return this.empTypeService.update(id, empTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() empTypeDto: EmpTypeDto) {
        return this.empTypeService.delete(id, empTypeDto);
    }
}