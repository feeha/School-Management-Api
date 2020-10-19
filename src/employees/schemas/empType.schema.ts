import * as mongoose from 'mongoose';

export const EmpTypeSchema = new mongoose.Schema({
    empType: { type: String, required: true }
});