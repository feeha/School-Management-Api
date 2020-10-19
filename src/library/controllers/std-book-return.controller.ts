import { Controller, Body, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { StdBookReturnService } from './../services/std-book-return.service';
import { StdBookReturnDto } from './../dtos/std-book-return.dto';
import { StdBookReturn } from './../interfaces/std-book-return.interface';

@Controller('stdBookReturn')
export class StdBookReturnController {
    constructor(private readonly stdBookReturnService: StdBookReturnService) { }

    @Post('/create')
    async create(@Body() stdBookReturnDto: StdBookReturnDto) {
        return this.stdBookReturnService.create(stdBookReturnDto);
    }
    @Get('/list')
    async findAll(): Promise<StdBookReturn[]> {
        return this.stdBookReturnService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.stdBookReturnService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() stdBookReturnDto: StdBookReturnDto) {
        return this.stdBookReturnService.update(id, stdBookReturnDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() stdBookReturnDto: StdBookReturnDto) {
        return this.stdBookReturnService.delete(id, stdBookReturnDto);
    }

}