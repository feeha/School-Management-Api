import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { StdAdmnService } from './../services/std-admn.service';
import { StdAdmnDto } from './../dtos/std-admn.dto';
import { StdAdmn } from './../interfaces/std-admn.interface';

@Controller('stdAdmn')
export class StdAdmnController {
    constructor(private readonly stdAdmnService: StdAdmnService) { }

    @Post('/create')
    async create(@Body() stdAdmnDto: StdAdmnDto) {
        return await this.stdAdmnService.create(stdAdmnDto);
    }
    @Get('/list')
    async findAll(): Promise<StdAdmn[]> {
        return await this.stdAdmnService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.stdAdmnService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdAdmnDto: StdAdmnDto) {
        return await this.stdAdmnService.update(id, stdAdmnDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() stdAdmnDto: StdAdmnDto) {
        return await this.stdAdmnService.delete(id, stdAdmnDto);
    }
}
