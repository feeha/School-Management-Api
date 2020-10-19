import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { DriversService } from './../services/drivers.service';
import { Drivers } from './../interfaces/drivers.interface';
import { DriversDto } from './../dtos/drivers.dto';

@Controller('drivers')
export class DriversController {
    constructor(private readonly driversService: DriversService) { }

    @Post('/create')
    async create(@Body() driverDto: DriversDto) {
        return this.driversService.create(driverDto);
    }
    @Get('/list')
    async findAll(): Promise<Drivers[]> {
        return this.driversService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.driversService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() driversDto: DriversDto) {
        return this.driversService.update(id, driversDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() driversDto: DriversDto) {
        return this.driversService.delete(id, driversDto);
    }
}