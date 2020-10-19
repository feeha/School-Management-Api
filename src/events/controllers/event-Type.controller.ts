import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { EventTypeService } from './../services/event-Type.service';
import { EventType } from '../interfaces/event-Type.interface';
import { EventTypeDto } from './../dtos/event-Type.dto';

@Controller('eventType')
export class EventTypeController {
    constructor(private readonly eventTypeService: EventTypeService) { }

    @Post('/create')
    async create(@Body() eventTypeDto: EventTypeDto) {
        return this.eventTypeService.create(eventTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<EventType[]> {
        return this.eventTypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.eventTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() eventTypeDto: EventTypeDto) {
        return this.eventTypeService.update(id, eventTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() eventTypeDto: EventTypeDto) {
        return this.eventTypeService.delete(id, eventTypeDto);
    }
}