import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Vouchers } from './../interfaces/vouchers.interface';
import { VouchersDto } from './../dtos/vouchers.dto';

@Injectable()
export class VouchersService {
    constructor(@Inject('VOUCHERS_MODEL') private readonly vouchersModel: Model<Vouchers>) { }

    async create(vouchersDto: VouchersDto): Promise<Vouchers> {
        const createVouchers = new this.vouchersModel(vouchersDto);
        return await createVouchers.save();
    }
    async findAll(): Promise<Vouchers[]> {
        return await this.vouchersModel.findAll().exec();
    }
    async find(id: string): Promise<Vouchers> {
        return await this.vouchersModel.find(id).exec();
    }
    async update(id: string, vouchersDto: VouchersDto): Promise<Vouchers> {
        return await this.vouchersModel.findByIdAndUpdate(id, vouchersDto);
    }
    async delete(id: string, vouchersDto: VouchersDto): Promise<Vouchers> {
        return await this.vouchersModel.findByIdAndRemove(id, vouchersDto);
    }
}