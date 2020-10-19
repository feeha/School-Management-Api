import { Controller, Body, Post, Get, Delete, Patch, Param } from '@nestjs/common';
import { StdDocService } from './../services/std-doc.service';
import { StdDoc } from './../interfaces/std-doc.interface';
import { StdDocDto } from './../dtos/std-doc.dto';

@Controller('stdDoc')
export class StdDocController {
    constructor(private readonly stdDocService: StdDocService) { }

    @Post('create')
    async create(@Body() stdDocDto: StdDocDto) {
        return await this.stdDocService.create(stdDocDto);
    }
    @Get('/list')
    async findAll(): Promise<StdDoc[]> {
        return await this.stdDocService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.stdDocService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdDocDto: StdDocDto) {
        return await this.stdDocService.update(id, stdDocDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() stdDocDto: StdDocDto) {
        return await this.stdDocService.delete(id, stdDocDto);
    }
}