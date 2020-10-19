import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { VansService } from './../services/vans.service';
import { VansDto } from './../dtos/vans.dto';
import { Vans } from './../interfaces/vans.interface';

@Controller('vans')
export class VansController {
    constructor(private readonly vansService: VansService) { }

    @Post('/create')
    async create(@Body() vansDto: VansDto) {
        return this.vansService.create(vansDto);
    }
    @Get('/list')
    async findAll(): Promise<Vans[]> {
        return this.vansService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.vansService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() vansDto: VansDto) {
        return this.vansService.update(id, vansDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() vansDto: VansDto) {
        return this.vansService.delete(id, vansDto);
    }
}