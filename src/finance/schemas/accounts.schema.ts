import * as mongoose from 'mongoose';
import { StdInfoSchema } from './../../students/schemas/std-info.schema';

export const AccountsSchema = new mongoose.Schema({
    acCode: { type: String, required: true },
    acName: { type: String, required: true },
    stdInfo: { type: StdInfoSchema, required: true },
    acDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, required: true }
});
