import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ClassRegService } from './../services/class-reg.service';
import { ClassRegDto } from './../dtos/class-reg.dto';
import { ClassReg } from './../interfaces/class-reg.interface';

@Controller('classReg')
export class ClassRegController {
    constructor(private readonly classRegService: ClassRegService) { }

    @Post('/create')
    async create(@Body() classRegDto: ClassRegDto) {
        return await this.classRegService.create(classRegDto);
    }
    @Get('/list')
    async findAll(): Promise<ClassReg[]> {
        return await this.classRegService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.classRegService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() classRegDto: ClassRegDto) {
        return await this.classRegService.update(id, classRegDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() classRegDto: ClassRegDto) {
        return await this.classRegService.delete(id, classRegDto);
    }
}
