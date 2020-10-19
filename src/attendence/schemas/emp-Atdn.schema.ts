import * as mongoose from 'mongoose';

export const EmpAtdnSchema = new mongoose.Schema({
    employee: { type: String, required: true },
    status: { type: String, required: true },
    leave: { type: String, required: true }
});