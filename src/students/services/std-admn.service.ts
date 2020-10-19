import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdAdmn } from './../interfaces/std-admn.interface';
import { StdAdmnDto } from './../dtos/std-admn.dto';

@Injectable()
export class StdAdmnService {
    constructor(@Inject('STD_ADMN_MODEL') private readonly stdAdmnModel: Model<StdAdmn>) { }

    async create(stdAdmnDto: StdAdmnDto): Promise<StdAdmn> {
        const createStdAdmn = new this.stdAdmnModel(stdAdmnDto);
        return await createStdAdmn.save();
    }

    async findAll(): Promise<StdAdmn[]> {
        return await this.stdAdmnModel.findAll().exec();
    }
    async find(id: string): Promise<StdAdmn> {
        return await this.stdAdmnModel.FindById(id).exec();
    }
    async update(id: string, stdAdmnDto: StdAdmnDto): Promise<StdAdmn> {
        return await this.stdAdmnModel.FindByIdAndUpdate(id, stdAdmnDto);
    }
    async delete(id: string, stdAdmnDto: StdAdmnDto): Promise<StdAdmn> {
        return await this.stdAdmnModel.FindByIdAndRemove(id, stdAdmnDto);
    }
}