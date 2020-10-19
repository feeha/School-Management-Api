import * as mongoose from 'mongoose';
import { StdBookIssuranceSchema } from './std-book-issurance.schema';

export const StdBookReturnSchema = new mongoose.Schema({
    stdIssurance: { type: StdBookIssuranceSchema, required: true },
    date: { type: Date, default: Date.now },
    isLate: { type: Boolean, required: true }
});