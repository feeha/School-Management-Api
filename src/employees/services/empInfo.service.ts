import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpInfo } from './../interfaces/empInfo.interface';
import { EmpInfoDto } from './../dtos/empInfo.dto';

@Injectable()
export class EmpInfoService {
    constructor(@Inject('EMP_INFO_MODEL') private readonly empInfoModel: Model<EmpInfo>) { }

    async create(empInfoDto: EmpInfoDto): Promise<EmpInfo> {
        const createEmpInfo = new this.empInfoModel(empInfoDto);
        return await createEmpInfo.save();
    }
    async findAll(): Promise<EmpInfo[]> {
        return await this.empInfoModel.find().exec();
    }
    async find(id: string): Promise<EmpInfo> {
        return await this.empInfoModel.findById(id).exec();
    }
    async update(id: String, empInfoDto: EmpInfoDto): Promise<EmpInfo> {
        return await this.empInfoModel.findByIdAndUpdate(id, empInfoDto);
    }
    async delete(id: string, empInfoDto: EmpInfoDto): Promise<EmpInfo> {
        return await this.empInfoModel.findByIdAndRemove(id, empInfoDto);
    }
}