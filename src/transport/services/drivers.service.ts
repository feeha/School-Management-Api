import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Drivers } from './../interfaces/drivers.interface';
import { DriversDto } from './../dtos/drivers.dto';

@Injectable()
export class DriversService {
    constructor(@Inject('DRIVER_MODEL') private readonly driverModel: Model<Drivers>) { }

    async create(driversDto: DriversDto): Promise<Drivers> {
        const createDrivers = new this.driverModel(driversDto);
        return await createDrivers.save();
    }
    async findAll(): Promise<Drivers[]> {
        return await this.driverModel.findAll().exec();
    }
    async find(id: string): Promise<Drivers> {
        return await this.driverModel.findById(id).exec();
    }
    async update(id: string, driversDto: DriversDto): Promise<Drivers> {
        return await this.driverModel.findByIdAndUpdate(id, driversDto);
    }
    async delete(id: string, driversDto: DriversDto): Promise<Drivers> {
        return await this.driverModel.findByIdAndDelete(id, driversDto);
    }
}