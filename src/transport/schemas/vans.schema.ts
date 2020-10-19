import * as mongoose from 'mongoose';
import { DriversSchema } from './drivers.schema';

export const VansSchema = new mongoose.Schema({
    driver: { type: DriversSchema, required: true },
    vanNo: { type: String, required: true },
    timing: { type: String, required: true }
});