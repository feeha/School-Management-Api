import { Inject, Injectable } from '@nestjs/common';
import { FeeType } from './../interfaces/fee-type.interface';
import { FeeTypeDto } from './../dtos/fee-type.dto';
import { Model } from 'mongoose';

@Injectable()
export class FeeTypeService {
    constructor(@Inject('FEE_TYPE_MODEL') private readonly feeTypeModel: Model<FeeType>) { }

    async create(feeTypeDto: FeeTypeDto): Promise<FeeType> {
        const createFeeType = new this.feeTypeModel(feeTypeDto);
        return await createFeeType.save();
    }
    async findAll(): Promise<FeeType[]> {
        return await this.feeTypeModel.findAll().exec();
    }
    async find(id: string): Promise<FeeType> {
        return await this.feeTypeModel.find(id).exec();
    }
    async update(id: string, feeTypeDto: FeeTypeDto): Promise<FeeType> {
        return await this.feeTypeModel.findByIdAndUpdate(id, feeTypeDto);
    }
    async delete(id: string, feeTypeDto: FeeTypeDto): Promise<FeeType> {
        return await this.feeTypeModel.findByIdAndRemove(id, feeTypeDto);
    }
}