import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { VanReg } from './../interfaces/van-reg.interface';
import { VanRegService } from './../services/van-reg.service';
import { VanRegDto } from './../dtos/van-reg.dto';

@Controller('vanReg')
export class VanRegController {
    constructor(private readonly vanRegService: VanRegService) { }

    @Post('/create')
    async create(@Body() vanRegDto: VanRegDto) {
        return this.vanRegService.create(vanRegDto);
    }
    @Get('/list')
    async findAll(): Promise<VanReg[]> {
        return this.vanRegService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.vanRegService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() vanRegDto: VanRegDto) {
        return this.vanRegService.update(id, vanRegDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() vanRegDto: VanRegDto) {
        return this.vanRegService.delete(id, vanRegDto);
    }
}