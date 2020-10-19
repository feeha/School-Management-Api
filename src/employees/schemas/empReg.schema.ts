import { EmpInfoSchema } from './empInfo.schema';
import * as mongoose from 'mongoose';


export const EmpRegSchema = new mongoose.Schema({
    empInfo: { type: EmpInfoSchema, required: true },
    empType: { type: String, required: true },
    salary: { type: String, required: true },
    joiningDate: { type: Date, default: Date.now }
});