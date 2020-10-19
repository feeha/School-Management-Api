import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PessengerType } from './../interfaces/pessenger-type.interface';
import { PessengerTypeDto } from './../dtos/pessenger-type.dto';
import { PessengerTypeService } from './../services/pessenger-type.service';

@Controller('pessengerType')
export class PessengerTypeController {
    constructor(private readonly pessengerTypeService: PessengerTypeService) { }

    @Post('/create')
    async create(@Body() pessengerTypeDto: PessengerTypeDto) {
        return this.pessengerTypeService.create(pessengerTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<PessengerType[]> {
        return this.pessengerTypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.pessengerTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() pessengerTypeDto: PessengerTypeDto) {
        return this.pessengerTypeService.update(id, pessengerTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() pessengerTypeDto: PessengerTypeDto) {
        return this.pessengerTypeService.delete(id, pessengerTypeDto);
    }
}