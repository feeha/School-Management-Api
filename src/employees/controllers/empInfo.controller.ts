import { Controller, Post, Get, Patch, Delete, Body, Param, HttpModule } from '@nestjs/common';
import { EmpInfoService } from './../services/empInfo.service';
import { EmpInfoDto } from './../dtos/empInfo.dto';
import { EmpInfo } from '../interfaces/empInfo.interface';

@Controller('empInfo')
export class EmpInfoController {
    constructor(private readonly empInfoService: EmpInfoService) { }

    @Post('/create')
    async create(@Body() empInfoDto: EmpInfoDto) {
        return this.empInfoService.create(empInfoDto);
    }
    @Get('/list')
    async findAll(): Promise<EmpInfo[]> {
        return this.empInfoService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.empInfoService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() empInfoDto: EmpInfoDto) {
        return this.empInfoService.update(id, empInfoDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() empInfoDto: EmpInfoDto) {
        return this.empInfoService.delete(id, empInfoDto)
    }
}