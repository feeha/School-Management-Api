import * as mongoose from 'mongoose';
import { EmpBookIssuranceSchema } from './emp-book-issuance.schema';

export const EmpBookReturnSchema = new mongoose.Schema({
    empIssurance: { type: EmpBookIssuranceSchema, required: true },
    date: { type: Date, default: Date.now },
    isLate: { type: Boolean, required: true }
});