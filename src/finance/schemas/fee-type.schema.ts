import * as mongoose from 'mongoose';

export const FeeTypeSchema = new mongoose.Schema ({
    feeType: { type: String, required: true },
    amount: { type: String, required: true }
})