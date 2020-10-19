import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { EmpBookIssuranceService } from './../services/emp-book-issuance.service';
import { EmpBookIssuanceDto } from './../dtos/emp-book-issuance.dto';
import { EmpBookIssurance } from './../interfaces/emp-book-issuance.interface';

@Controller('empBookIssurance')
export class EmpBookIssuranceController {
    constructor(private readonly empBookIssuranceService: EmpBookIssuranceService) { }
    @Post('/create')
    async create(@Body() empBookIssuranceDto: EmpBookIssuanceDto) {
        return this.empBookIssuranceService.create(empBookIssuranceDto);
    }
    @Get('/list')
    async findAll(): Promise<EmpBookIssurance[]> {
        return this.empBookIssuranceService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.empBookIssuranceService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() empBookIssuranceDto: EmpBookIssuanceDto) {
        return this.empBookIssuranceService.update(id, empBookIssuranceDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() empBookIssuranceDto: EmpBookIssuanceDto) {
        return this.empBookIssuranceService.delete(id, empBookIssuranceDto);
    }

}