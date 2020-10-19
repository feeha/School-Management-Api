import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { StdAtdn } from './../interfaces/std-Atdn.interface';
import { StdAtdnDto } from './../dtos/std-Atdn.dto';
import { StdAtdnService } from './../services/std-Atdn.service';

@Controller('stdAtdn')
export class StdAtdnController {
    constructor(private readonly stdAtdnService: StdAtdnService) { }

    @Post('/create')
    async create(@Body() stdAtdnDto: StdAtdnDto) {
        return this.stdAtdnService.create(stdAtdnDto);
    }
    @Get('/list')
    async findAll(): Promise<StdAtdn[]> {
        return this.stdAtdnService.findAll();
    }
    @Get(':id')
    async find(@Param('id') id: string) {
        return this.stdAtdnService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdAtdnDto: StdAtdnDto) {
        return this.stdAtdnService.update(id, stdAtdnDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() stdAtdnDto: StdAtdnDto) {
        return this.stdAtdnService.delete(id, stdAtdnDto);
    }
}
