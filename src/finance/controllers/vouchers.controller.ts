import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { VouchersService } from './../services/vouchers.service';
import { VouchersDto } from './../dtos/vouchers.dto';
import { Vouchers } from '../interfaces/vouchers.interface';

@Controller('vouchers')
export class VouchersController {
    constructor(private readonly vouchersService: VouchersService) { }

    @Post('/create')
    async create(@Body() vouchersDto: VouchersDto) {
        return await this.vouchersService.create(vouchersDto);
    }
    @Get('/list')
    async findAll(): Promise<Vouchers[]> {
        return await this.vouchersService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.vouchersService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() vouchersDto: VouchersDto) {
        return await this.vouchersService.update(id, vouchersDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() vouchersDto: VouchersDto) {
        return await this.vouchersService.delete(id, vouchersDto);
    }
}