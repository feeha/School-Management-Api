import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpBookReturn } from './../interfaces/emp-book-return.interface';
import { EmpBookReturnDto } from './../dtos/emp-book-return.dto';

@Injectable()
export class EmpBookReturnService {
    constructor(@Inject('EMP_BOOK_RETURN_MODEL') private readonly empBookReturnModel: Model<EmpBookReturn>) { }

    async create(empBookReturnDto: EmpBookReturnDto): Promise<EmpBookReturn> {
        const createEmpBookReturn = new this.empBookReturnModel(empBookReturnDto);
        return await createEmpBookReturn.save();
    }
    async findAll(): Promise<EmpBookReturn[]> {
        return await this.empBookReturnModel.find().exec();
    }
    async find(id: string): Promise<EmpBookReturn> {
        return await this.empBookReturnModel.findById(id);
    }
    async update(id: string, empBookReturnDto: EmpBookReturnDto): Promise<EmpBookReturn> {
        return await this.empBookReturnModel.findByIdAndUpdate(id, empBookReturnDto);
    }
    async delete(id: string, empBookReturnDto: EmpBookReturnDto): Promise<EmpBookReturn> {
        return await this.empBookReturnModel.findByIdAndRemove(id, empBookReturnDto);
    }
}