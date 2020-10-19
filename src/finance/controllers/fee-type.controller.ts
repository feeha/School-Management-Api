import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { FeeTypeService } from './../services/fee-type.service';
import { FeeType } from './../interfaces/fee-type.interface';
import { FeeTypeDto } from './../dtos/fee-type.dto';

@Controller('feeType')
export class FeeTypeController {
    constructor(private readonly feeTypeService: FeeTypeService) { }

    @Post('/create')
    async create(@Body() feeTypeDto: FeeTypeDto) {
        return await this.feeTypeService.create(feeTypeDto);
    }
    @Get('/list')
    async findAll(): Promise<FeeType[]> {
        return await this.feeTypeService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.feeTypeService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() feeTypeDto: FeeTypeDto) {
        return await this.feeTypeService.update(id, feeTypeDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() feeTypeDto: FeeTypeDto) {
        return await this.feeTypeService.delete(id, feeTypeDto);
    }
}