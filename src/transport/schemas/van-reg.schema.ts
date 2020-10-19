import * as mongoose from 'mongoose';
import { PessengerTypeSchema } from './pessenger-type.schema';
import { RegPackagesSchema } from './reg-packages.schema';

export const VanRegSchema = new mongoose.Schema({
    vanNo: { type: String, required: true },
    regPackage: { type: RegPackagesSchema, required: true },
    pessengerType: { type: PessengerTypeSchema, required: true },
    date: { type: Date, default: Date.now }
});