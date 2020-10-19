import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdBookIssurance } from './../interfaces/std-book-issurance.interface';
import { StdBookIssuanceDto } from './../dtos/std-book-issurance.dto';

@Injectable()
export class StdBookIssuranceService {
    constructor(@Inject('STD_BOOK_ISSURANCE_MODEL') private readonly stdBookIssuranceModel: Model<StdBookIssurance>) { }

    async create(stdBookIssuranceDto: StdBookIssuanceDto): Promise<StdBookIssurance> {
        const createStdBookIssurance = new this.stdBookIssuranceModel(stdBookIssuranceDto);
        return await createStdBookIssurance.save();
    }
    async findAll(): Promise<StdBookIssurance[]> {
        return await this.stdBookIssuranceModel.find().exec();
    }
    async find(id: string): Promise<StdBookIssurance> {
        return await this.stdBookIssuranceModel.findById(id);
    }
    async update(id: string, stdBookIssuranceDto: StdBookIssuanceDto): Promise<StdBookIssurance> {
        return await this.stdBookIssuranceModel.findByIdAndUpdate(id, stdBookIssuranceDto);
    }
    async delete(id: string, stdBookIssuranceDto: StdBookIssuanceDto): Promise<StdBookIssurance> {
        return await this.stdBookIssuranceModel.findByIdAndRemove(id, stdBookIssuranceDto);
    }
}