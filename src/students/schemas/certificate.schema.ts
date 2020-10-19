import { StdInfoSchema } from './std-info.schema';
import * as mongoose from 'mongoose';

export const CertificateSchema = new mongoose.Schema ({
    certificate: { type: String, required: true },
    stdInfo: { type: StdInfoSchema, required: true },
    date: { type: Date, default: Date.now}
});