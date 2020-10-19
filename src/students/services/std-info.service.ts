import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdInfoDto } from './../dtos/std-info.dto';
import { StdInfo } from '../interfaces/std-info.interface';

@Injectable()
export class StdInfoService {
    constructor(@Inject('STD_INFO_MODEL') private readonly stdInfoModel: Model<StdInfo>) { }

    async create(stdInfoDto: StdInfoDto): Promise<StdInfo> {
        const createStdInfo = new this.stdInfoModel(stdInfoDto);
        return await createStdInfo.save();
    }
    async findAll(): Promise<StdInfo[]> {
        return await this.stdInfoModel.find().exec();
    }
    async find(id: string): Promise<StdInfo> {
        return await this.stdInfoModel.findById(id).exec();
    }
    async update(id: string, stdInfoDto: StdInfoDto): Promise<StdInfo> {
        return await this.stdInfoModel.findByIdAndUpdate(id, stdInfoDto);
    }
    async delete(id: string, stdInfoDto: StdInfoDto): Promise<StdInfo> {
        return await this.stdInfoModel.findByIdAndRemove(id, stdInfoDto);
    }
}
