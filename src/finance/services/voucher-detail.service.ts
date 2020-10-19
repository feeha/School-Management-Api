import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VoucherDetailDto } from './../dtos/voucher-detail.dto';
import { VoucherDetail } from './../interfaces/voucher-detail.interface';

@Injectable()
export class VoucherDetailService {
    constructor(@Inject('VOUCHER_DETAIL_MODEL') private readonly voucherDetailModel: Model<VoucherDetail>) { }

    async create(voucherDetailDto: VoucherDetailDto): Promise<VoucherDetail> {
        const createVoucherDetail = new this.voucherDetailModel(voucherDetailDto);
        return await createVoucherDetail.save();
    }
    async findAll(): Promise<VoucherDetail[]> {
        return await this.voucherDetailModel.findAll().exec();
    }
    async find(id: string): Promise<VoucherDetail> {
        return await this.voucherDetailModel.find(id).exec();
    }
    async update(id: string, voucherDetailDto: VoucherDetailDto): Promise<VoucherDetail> {
        return await this.voucherDetailModel.findByIdAndUpdate(id, voucherDetailDto);
    }
    async delete(id: string, voucherDetailDto: VoucherDetailDto): Promise<VoucherDetail> {
        return await this.voucherDetailModel.findByIdAndRemove(id, voucherDetailDto);
    }
}