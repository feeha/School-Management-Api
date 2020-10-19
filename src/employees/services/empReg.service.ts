import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpRegDto } from './../dtos/empReg.dto';
import { EmpReg } from '../interfaces/empReg.interface';

@Injectable()
export class EmpRegService {
    constructor(@Inject('EMP_REG_MODEL') private readonly empRegModel: Model<EmpReg>) { }

    async create(empRegDto: EmpRegDto): Promise<EmpReg> {
        const createEmpReg = new this.empRegModel(empRegDto);
        return await createEmpReg.save();
    }
    async findAll(): Promise<EmpReg[]> {
        return await this.empRegModel.find().exec();
    }
    async find(id: string): Promise<EmpReg> {
        return await this.empRegModel.findById(id).exec();
    }
    async update(id: string, empRegDto: EmpRegDto): Promise<EmpReg> {
        return await this.empRegModel.findByIdAndUpdate(id, empRegDto);
    }
    async delete(id: string, empRegDto: EmpRegDto): Promise<EmpReg> {
        return await this.empRegModel.findByIdAndRemove(id, empRegDto);
    }
}
