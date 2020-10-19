import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { RegPackages } from './../interfaces/reg-packages.interface';
import { RegPackagesService } from './../services/reg-packages.service';
import { RegPackagesDto } from './../dtos/reg-packages.dto';

@Controller('regPackages')
export class RegPackagesController {
    constructor(private readonly regPackagesService: RegPackagesService) { }

    @Post('/create')
    async create(@Body() regPackagesDto: RegPackagesDto) {
        return this.regPackagesService.create(regPackagesDto);
    }
    @Get('/list')
    async findAll(): Promise<RegPackages[]> {
        return this.regPackagesService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.regPackagesService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() regPackagesDto: RegPackagesDto) {
        return this.regPackagesService.update(id, regPackagesDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() regPackagesDto: RegPackagesDto) {
        return this.regPackagesService.delete(id, regPackagesDto);
    }
}