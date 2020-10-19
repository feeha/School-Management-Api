import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { EmpBookReturnService } from './../services/emp-book-return.service';
import { EmpBookReturnDto } from './../dtos/emp-book-return.dto';
import { EmpBookReturn } from './../interfaces/emp-book-return.interface';

@Controller('empBookReturn')
export class EmpBookReturnController {
    constructor(private readonly empBookReturnService: EmpBookReturnService) { }

    @Post('/create')
    async create(@Body() empBookReturnsDto: EmpBookReturnDto) {
        return this.empBookReturnService.create(empBookReturnsDto);
    }
    @Get('/list')
    async findAll(): Promise<EmpBookReturn[]> {
        return this.empBookReturnService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.empBookReturnService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() empBookReturnsDto: EmpBookReturnDto) {
        return this.empBookReturnService.update(id, empBookReturnsDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() empBookReturnsDto: EmpBookReturnDto) {
        return this.empBookReturnService.delete(id, empBookReturnsDto);
    }

}