import * as mongoose from 'mongoose';

export const EmpInfoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    cnicNo: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    contactNo: { type: String, required: true },
    experience: { type: String, required: true }
});