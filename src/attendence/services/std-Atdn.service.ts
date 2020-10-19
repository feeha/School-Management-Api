import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdAtdn } from './../interfaces/std-Atdn.interface';
import { StdAtdnDto } from './../dtos/std-Atdn.dto';

@Injectable()
export class StdAtdnService {
    constructor(@Inject('STD_ATDN_MODEL') private readonly stdAtdnModel: Model<StdAtdn>) { }

    async create(stdAtdnDto: StdAtdnDto): Promise<StdAtdn> {
        const createStdAtdn = this.stdAtdnModel(stdAtdnDto);
        return await createStdAtdn.save();
    }
    async findAll(): Promise<StdAtdn[]> {
        return await this.stdAtdnModel.find().exec();
    }
    async find(id: string): Promise<StdAtdn> {
        return await this.stdAtdnModel.findById(id).exec();
    }
    async update(id: string, stdAtdnDto: StdAtdnDto): Promise<StdAtdn> {
        return await this.stdAtdnModel.findByIdAndUpdate(id, stdAtdnDto);
    }
    async delete(id: string, stdAtdnDto: StdAtdnDto): Promise<StdAtdn> {
        return await this.stdAtdnModel.findByIdAndRemove(id, stdAtdnDto);
    }
}