import { Document } from 'mongoose';
import { VoucherDetail } from './voucher-detail.interface';
import { StdAdmn } from 'src/students/interfaces/std-admn.interface';

export interface Vouchers extends Document {
    readonly voucherNo: string;
    readonly stdAdmn: StdAdmn;
    readonly voucherDetail: VoucherDetail;
    readonly amount: string;
    readonly dueDate: Date;
    readonly isActive: boolean;
}