import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Event } from './../interfaces/event.interface';
import { EventService } from './../services/event.service';
import { EventDto } from './../dtos/event.dto';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) { }

    @Post('/create')
    async create(@Body() eventDto: EventDto) {
        return this.eventService.create(eventDto);
    }
    @Get('/list')
    async findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.eventService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() eventDto: EventDto) {
        return this.eventService.update(id, eventDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() eventDto: EventDto) {
        return this.eventService.delete(id, eventDto);
    }
}