import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VansDto } from './../dtos/vans.dto';
import { Vans } from './../interfaces/vans.interface';

@Injectable()
export class VansService {
    constructor(@Inject('VANS_MODEL') private readonly vansModel: Model<Vans>) { }

    async create(vansDto: VansDto): Promise<Vans> {
        const createVans = new this.vansModel(vansDto);
        return await createVans.save();
    }
    async findAll(): Promise<Vans[]> {
        return await this.vansModel.findAll().exec();
    }
    async find(id: string): Promise<Vans> {
        return await this.vansModel.findById(id).exec();
    }
    async update(id: string, vansDto: VansDto): Promise<Vans> {
        return await this.vansModel.findByIdAndUpdate(id, vansDto);
    }
    async delete(id: string, vansDto: VansDto): Promise<Vans> {
        return await this.vansModel.findByIdAndDelete(id, vansDto);
    }
}