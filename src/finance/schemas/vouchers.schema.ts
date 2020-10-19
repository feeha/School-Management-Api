import * as mongoose from 'mongoose';
import { VoucherDetailSchema } from './voucher-detail.schema';
import { StdAdmnSchema } from './../../students/schemas/std-admn.schema';

export const VouchersSchema = new mongoose.Schema ({
    voucherNo: {type: String, required: true },
    stdAdmn: { type: StdAdmnSchema, required: true },
    voucherDetail: { type: VoucherDetailSchema, required: true },
    amount: { type: String, required: true },
    dueDate: { type: Date, required: true },
    date: { type: Date, default: Date.now },
    isActive: { type: Boolean, required: true }
});