import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmpRegService } from './../services/empReg.service';
import { EmpRegDto } from './../dtos/empReg.dto';
import { EmpReg } from './../interfaces/empReg.interface';

@Controller('empReg')
export class EmpRegController {
    constructor(private readonly empRegService: EmpRegService) { }

    @Post('/create')
    async create(@Body() empRegDto: EmpRegDto) {
        return this.empRegService.create(empRegDto);
    }
    @Get('/list')
    async findAll(): Promise<EmpReg[]> {
        return this.empRegService.findAll();
    }
    @Get(':id')
    async find(@Param('id') id: string) {
        return this.empRegService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() empRegDto: EmpRegDto) {
        return this.empRegService.update(id, empRegDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() empRegDto: EmpRegDto) {
        return this.empRegService.delete(id, empRegDto);
    }
}