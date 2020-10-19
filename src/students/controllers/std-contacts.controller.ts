import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { StdContactsService } from './../services/std-contacts.service';
import { StdContactsDto } from './../dtos/std-contacts.dto';
import { StdContacts } from './../interfaces/std-contacts.interface';

@Controller('std-contacts')
export class StdContactsController {
    constructor(private readonly stdContactsService: StdContactsService) { }

    @Post('/create')
    async create(@Body() stdContactsDto: StdContactsDto) {
        return await this.stdContactsService.create(stdContactsDto);
    }
    @Get('/list')
    async findAll(): Promise<StdContacts[]> {
        return await this.stdContactsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string): Promise<StdContacts> {
        return await this.stdContactsService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdContactsDto: StdContactsDto) {
        return await this.stdContactsService.update(id, stdContactsDto);
    }
    @Delete('delete/:id')
    async delete(@Param('id') id: string, @Body() stdContactsDto: StdContactsDto) {
        return await this.stdContactsService.delete(id, stdContactsDto);
    }
}