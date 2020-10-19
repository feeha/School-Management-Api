import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { Report } from './../interfaces/report.interface';
import { ReportService } from './../services/report.service';
import { ReportDto } from './../dtos/report.dto';

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    @Post('/create')
    async create(@Body() reportDto: ReportDto) {
        return await this.reportService.create(reportDto);
    }
    @Get('/list')
    async findAll(): Promise<Report[]> {
        return await this.reportService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.reportService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() reportDto: ReportDto) {
        return await this.reportService.update(id, reportDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() reportDto: ReportDto) {
        return await this.reportService.delete(id, reportDto);
    }
}