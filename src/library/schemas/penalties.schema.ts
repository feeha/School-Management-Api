import * as mongoose from 'mongoose';

export const PenaltiesSchema = new mongoose.Schema({
    penaltyName: { type: String, required: true },
    amount: { type: String, required: true }
});