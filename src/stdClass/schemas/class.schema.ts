import * as mongoose from 'mongoose';
import { SectionSchema } from './section.schema';

export const ClassSchema = new mongoose.Schema ({
    class: { type: String, required: true },
    section: { type: SectionSchema, required: true },
    isActive: { type: Boolean, required: true }
});