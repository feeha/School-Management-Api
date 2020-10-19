import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmpAtdn } from './../interfaces/emp-Atdn.interface';
import { EmpAtdnDto } from './../dtos/emp-Atdn.dto';
import { EmpAtdnService } from './../services/emp-Atdn.service';

@Controller('empAtdn')
export class EmpAtdnController {
    constructor(private readonly empAtdnService: EmpAtdnService) { }

    @Post('/create')
    async create(@Body() empAtdndto: EmpAtdnDto) {
        return this.empAtdnService.create(empAtdndto);
    }
    @Get('/list')
    async findAll(): Promise<EmpAtdn[]> {
        return this.empAtdnService.findAll();
    }
    @Get(':id')
    async find(@Param('id') id: string) {
        return this.empAtdnService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() empAtdnDto: EmpAtdnDto) {
        return this.empAtdnService.update(id, empAtdnDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() empAtdnDto: EmpAtdnDto) {
        return this.empAtdnService.delete(id, empAtdnDto);
    }
}