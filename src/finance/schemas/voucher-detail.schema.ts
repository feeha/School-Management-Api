import * as mongoose from 'mongoose';
import { FeeTypeSchema } from './fee-type.schema';

export const VoucherDetailSchema = new mongoose.Schema ({
    feeType: { type: FeeTypeSchema, required: true },
    amount: { type: String, required: true }
});