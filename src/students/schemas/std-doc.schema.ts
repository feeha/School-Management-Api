import * as mongoose from 'mongoose';
import { DocTypeSchema } from './doc-type.schema';

export const StdDocSchema = new mongoose.Schema ({
documents: { type: String, required: true },
docType: {type: DocTypeSchema, required: true }
});