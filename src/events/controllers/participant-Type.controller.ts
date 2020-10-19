import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ParticipantType } from './../interfaces/participant-Type.interface';
import { ParticipantTypeService } from './../services/participant-Type.service';
import { ParticipantTypeDto } from './../dtos/participant-Type.dto';

@Controller('participantType')
export class ParticipantTypeController {
    constructor(private readonly participantTypeService: ParticipantTypeService) { }

    @Post('/create')
    async create(@Body() participantTypeDto: ParticipantTypeDto) {
        return this.participantTypeService.create(participantTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<ParticipantType[]> {
        return this.participantTypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.participantTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() participantTypeDto: ParticipantTypeDto) {
        return this.participantTypeService.update(id, participantTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() participantTypeDto: ParticipantTypeDto) {
        return this.participantTypeService.delete(id, participantTypeDto);
    }
}