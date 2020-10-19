import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RegPackages } from './../interfaces/reg-packages.interface';
import { RegPackagesDto } from './../dtos/reg-packages.dto';

@Injectable()
export class RegPackagesService {
    constructor(@Inject('REG_PACKAGES_MODEL') private readonly regPackagesModel: Model<RegPackages>) { }

    async create(regPackagesDto: RegPackagesDto): Promise<RegPackages> {
        const createRegPackages = new this.regPackagesModel(regPackagesDto);
        return await createRegPackages.save();
    }
    async findAll(): Promise<RegPackages[]> {
        return await this.regPackagesModel.findAll().exec();
    }
    async find(id: string): Promise<RegPackages> {
        return await this.regPackagesModel.findById(id).exec();
    }
    async update(id: string, regPackagesDto: RegPackagesDto): Promise<RegPackages> {
        return await this.regPackagesModel.findByIdAndUpdate(id, regPackagesDto);
    }
    async delete(id: string, regPackagesDto: RegPackagesDto): Promise<RegPackages> {
        return await this.regPackagesModel.findByIdAndDelete(id, regPackagesDto);
    }
}