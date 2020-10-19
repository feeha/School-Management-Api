import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VanRegDto } from './../dtos/van-reg.dto';
import { VanReg } from './../interfaces/van-reg.interface';

@Injectable()
export class VanRegService {
    constructor(@Inject('VAN_REG_MODEL') private readonly vanRegModel: Model<VanReg>) { }

    async create(vanRegDto: VanRegDto): Promise<VanReg> {
        const createVanReg = new this.vanRegModel(vanRegDto);
        return await createVanReg.save();
    }
    async findAll(): Promise<VanReg[]> {
        return await this.vanRegModel.findAll().exec();
    }
    async find(id: string): Promise<VanReg> {
        return await this.vanRegModel.findById(id).exec();
    }
    async update(id: string, vanRegDto: VanRegDto): Promise<VanReg> {
        return await this.vanRegModel.findByIdAndUpdate(id, vanRegDto);
    }
    async delete(id: string, vanRegDto: VanRegDto): Promise<VanReg> {
        return await this.vanRegModel.findByIdAndDelete(id, vanRegDto);
    }
}