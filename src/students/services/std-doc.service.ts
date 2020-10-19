import { Inject, Injectable, Delete } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdDoc } from '../interfaces/std-doc.interface';
import { StdDocDto } from './../dtos/std-doc.dto';

@Injectable()
export class StdDocService {
    constructor(@Inject('STD_DOC_MODEL') private readonly stdDocModel: Model<StdDoc>) { }

    async create(stdDocDto: StdDocDto): Promise<StdDoc> {
        const createStdDoc = new this.stdDocModel(stdDocDto);
        return await createStdDoc.save();
    }
    async findAll(): Promise<StdDoc[]> {
        return await this.stdDocModel.findAll().exec();
    }
    async find(id: string): Promise<StdDoc> {
        return await this.stdDocModel.FindById(id).exec();
    }
    async update(id: string, stdDocDto: StdDocDto): Promise<StdDoc> {
        return await this.stdDocModel.FindByIdAndUpdate(id, stdDocDto);
    }
    async delete(id: string, stdDocDto: StdDocDto): Promise<StdDoc> {
        return await this.stdDocModel.FindByIdAndRemove(id, stdDocDto);
    }
}