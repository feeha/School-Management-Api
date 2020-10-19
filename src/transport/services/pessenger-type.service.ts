import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PessengerType } from './../interfaces/pessenger-type.interface';
import { PessengerTypeDto } from './../dtos/pessenger-type.dto';

@Injectable()
export class PessengerTypeService {
    constructor(@Inject('PESSENGER_TYPE_MODEL') private readonly pessengerTypeModel: Model<PessengerType>) { }

    async create(pessengerTypeDto: PessengerTypeDto): Promise<PessengerType> {
        const createPessengerType = new this.pessengerTypeModel(pessengerTypeDto);
        return await createPessengerType.save();
    }
    async findAll(): Promise<PessengerType[]> {
        return await this.pessengerTypeModel.findAll().exec();
    }
    async find(id: string): Promise<PessengerType> {
        return await this.pessengerTypeModel.findById(id).exec();
    }
    async update(id: string, pessengerTypeDto: PessengerTypeDto): Promise<PessengerType> {
        return await this.pessengerTypeModel.findByIdAndUpdate(id, pessengerTypeDto);
    }
    async delete(id: string, pessengerTypeDto: PessengerTypeDto): Promise<PessengerType> {
        return await this.pessengerTypeModel.findByIdAndDelete(id, pessengerTypeDto);
    }
}