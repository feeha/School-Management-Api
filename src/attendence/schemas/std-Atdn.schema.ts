import * as mongoose from 'mongoose';

export const StdAtdnSchema = new mongoose.Schema({
    student: { type: String, required: true },
    status: { type: String, required: true },
    leave: { type: String, required: true }
});