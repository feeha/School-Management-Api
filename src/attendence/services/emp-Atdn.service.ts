import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpAtdn } from './../interfaces/emp-Atdn.interface';
import { EmpAtdnDto } from './../dtos/emp-Atdn.dto';

@Injectable()
export class EmpAtdnService {
    constructor(@Inject('EMP_ATDN_MODEL') private readonly empAtdnModel: Model<EmpAtdn>) { }

    async create(empAtdDto: EmpAtdnDto): Promise<EmpAtdn> {
        const createEmpAtdn = new this.empAtdnModel(empAtdDto);
        return await createEmpAtdn.save();
    }
    async findAll(): Promise<EmpAtdn[]> {
        return await this.empAtdnModel.find().exec();
    }
    async find(id: string): Promise<EmpAtdn> {
        return await this.empAtdnModel.findById(id);
    }
    async update(id: string, empAtdndto: EmpAtdnDto): Promise<EmpAtdn> {
        return await this.empAtdnModel.findByIdAndUpdate(id, empAtdndto)
    }
    async delete(id: string, empAtdnDto: EmpAtdnDto): Promise<EmpAtdn> {
        return await this.empAtdnModel.findByIdAndRemove(id, empAtdnDto);
    }

}
