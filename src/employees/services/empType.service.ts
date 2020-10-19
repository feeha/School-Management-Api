import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpTypeDto } from './../dtos/empType.dto';
import { EmpType } from './../interfaces/empType.interface';

@Injectable()
export class EmpTypeService {
    constructor(@Inject('EMP_TYPE_MODEL') private readonly empTypeModel: Model<EmpType>) { }

    async create(empTypeDto: EmpTypeDto): Promise<EmpType> {
        const createEmpType = new this.empTypeModel(empTypeDto);
        return await createEmpType.save();
    }
    async findAll(): Promise<EmpType[]> {
        return await this.empTypeModel.find().exec();
    }
    async find(id: string): Promise<EmpType> {
        return await this.empTypeModel.findById(id).exec();
    }
    async update(id: string, empTypeDto: EmpTypeDto): Promise<EmpType> {
        return await this.empTypeModel.findByIdAndUpdate(id, empTypeDto);
    }
    async delete(id: string, empTypeDto: EmpTypeDto): Promise<EmpType> {
        return await this.empTypeModel.findByIdAndRemove(id, empTypeDto);
    }
}