import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpBookIssurance } from './../interfaces/emp-book-issuance.interface';
import { EmpBookIssuanceDto } from './../dtos/emp-book-issuance.dto';

@Injectable()
export class EmpBookIssuranceService {
    constructor(@Inject('EMP_BOOK_ISSURANCE_MODEL') private readonly empBookIssuranceModel: Model<EmpBookIssurance>) { }

    async create(empBookIssuranceDto: EmpBookIssuanceDto): Promise<EmpBookIssurance> {
        const createEmpBookIssurance = new this.empBookIssuranceModel(empBookIssuranceDto);
        return await createEmpBookIssurance.save();
    }
    async findAll(): Promise<EmpBookIssurance[]> {
        return await this.empBookIssuranceModel.find().exec();
    }
    async find(id: string): Promise<EmpBookIssurance> {
        return await this.empBookIssuranceModel.findById(id);
    }
    async update(id: string, empBookIssuranceDto: EmpBookIssuanceDto): Promise<EmpBookIssurance> {
        return await this.empBookIssuranceModel.findByIdAndUpdate(id, empBookIssuranceDto);
    }
    async delete(id: string, empBookIssuranceDto: EmpBookIssuanceDto): Promise<EmpBookIssurance> {
        return await this.empBookIssuranceModel.findByIdAndRemove(id, empBookIssuranceDto);
    }
}