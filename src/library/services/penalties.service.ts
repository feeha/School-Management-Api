import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Penalties } from './../interfaces/penalties.interface';
import { PenaltiesDto } from './../dtos/penalties.dto';

@Injectable()
export class PenaltiesService {
    constructor(@Inject('PENALTIES_MODEL') private readonly penaltiesModel: Model<Penalties>) { }

    async create(penaltiesDto: PenaltiesDto): Promise<Penalties> {
        const createPenalties = new this.penaltiesModel(penaltiesDto);
        return await createPenalties.save();
    }
    async findAll(): Promise<Penalties[]> {
        return await this.penaltiesModel.find().exec();
    }
    async find(id: string): Promise<Penalties> {
        return await this.penaltiesModel.findById(id);
    }
    async update(id: string, penaltiesDto: PenaltiesDto): Promise<Penalties> {
        return await this.penaltiesModel.findByIdAndUpdate(id, penaltiesDto);
    }
    async delete(id: string, penaltiesDto: PenaltiesDto): Promise<Penalties> {
        return await this.penaltiesModel.findByIdAndRemove(id, penaltiesDto);
    }
}