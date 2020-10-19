import { StdInfoSchema } from './std-info.schema';
import * as mongoose from 'mongoose';

export const StdAdmnSchema = new mongoose.Schema ({
    stdInfo: { type: StdInfoSchema, required: true },
    testScroe: { type: String, required: true },
    joiningDate: { type: Date, default: Date.now}
});