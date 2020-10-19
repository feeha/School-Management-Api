import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { Schedule } from '../interfaces/schedule.interface';
import { ScheduleDto } from '../dtos/schedule.dto';
import { ScheduleService } from '../services/schedule.service';

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    @Post('/create')
    async create(@Body() scheduleDto: ScheduleDto) {
        return await this.scheduleService.create(scheduleDto);
    }
    @Get('/list')
    async findAll(): Promise<Schedule[]> {
        return await this.scheduleService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.scheduleService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() scheduleDto: ScheduleDto) {
        await this.scheduleService.update(id, scheduleDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() scheduleDto: ScheduleDto) {
        return await this.scheduleService.delete(id, scheduleDto);
    }
}