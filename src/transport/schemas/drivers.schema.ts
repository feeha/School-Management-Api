import * as mongoose from 'mongoose';

export const DriversSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true }
});