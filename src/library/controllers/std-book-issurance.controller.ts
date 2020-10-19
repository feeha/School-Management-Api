import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { StdBookIssuranceService } from './../services/std-book-issurance.service';
import { StdBookIssuanceDto } from './../dtos/std-book-issurance.dto';
import { StdBookIssurance } from './../interfaces/std-book-issurance.interface';

@Controller('stdBookIssurance')
export class StdBookIssuranceController {
    constructor(private readonly stdBookIssuranceService: StdBookIssuranceService) { }

    @Post('/create')
    async create(@Body() stdBookIssurancesDto: StdBookIssuanceDto) {
        return this.stdBookIssuranceService.create(stdBookIssurancesDto);
    }
    @Get('/list')
    async findAll(): Promise<StdBookIssurance[]> {
        return this.stdBookIssuranceService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.stdBookIssuranceService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdBookIssurancesDto: StdBookIssuanceDto) {
        return this.stdBookIssuranceService.update(id, stdBookIssurancesDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() stdBookIssurancesDto: StdBookIssuanceDto) {
        return this.stdBookIssuranceService.delete(id, stdBookIssurancesDto);
    }

}