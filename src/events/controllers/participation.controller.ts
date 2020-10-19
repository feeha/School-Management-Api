import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ParticipationService } from './../services/participation.service';
import { ParticipationDto } from './../dtos/participation.dto';
import { Participation } from './../interfaces/participation.interface';

@Controller('participation')
export class ParticipationController {
    constructor(private readonly participationService: ParticipationService) { }

    @Post('/create')
    async create(@Body() participationDto: ParticipationDto) {
        return this.participationService.create(participationDto);
    }
    @Get('/list')
    async findAll(): Promise<Participation[]> {
        return this.participationService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.participationService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() participationDto: ParticipationDto) {
        return this.participationService.update(id, participationDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() participationDto: ParticipationDto) {
        return this.participationService.delete(id, participationDto);
    }
}