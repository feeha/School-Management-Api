import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { StdInfoService } from './../services/std-info.service';
import { StdInfoDto } from './../dtos/std-info.dto';
import { StdInfo } from '../interfaces/std-info.interface';

@Controller('stdInfo')
export class StdInfoController {
    constructor(private readonly stdInfoService: StdInfoService) { }

    @Post('/create')
    async create(@Body() stdInfoDto: StdInfoDto) {
        return await this.stdInfoService.create(stdInfoDto);
    }
    @Get('/list')
    async findAll(): Promise<StdInfo[]> {
        return await this.stdInfoService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.stdInfoService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdInfoDto: StdInfoDto) {
        return await this.stdInfoService.update(id, stdInfoDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() stdInfoDto: StdInfoDto) {
        return await this.stdInfoService.delete(id, stdInfoDto);
    }
}
