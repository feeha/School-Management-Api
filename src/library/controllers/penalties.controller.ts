import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { PenaltiesService } from './../services/penalties.service';
import { PenaltiesDto } from './../dtos/penalties.dto';
import { Penalties } from './../interfaces/penalties.interface';

@Controller('penalties')
export class PenaltiesController {
    constructor(private readonly penaltiesService: PenaltiesService) { }

    @Post('/create')
    async create(@Body() penaltiesDto: PenaltiesDto) {
        return this.penaltiesService.create(penaltiesDto);
    }
    @Get('/list')
    async findAll(): Promise<Penalties[]> {
        return this.penaltiesService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.penaltiesService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() penaltiesDto: PenaltiesDto) {
        return this.penaltiesService.update(id, penaltiesDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() penaltiesDto: PenaltiesDto) {
        return this.penaltiesService.delete(id, penaltiesDto);
    }

}