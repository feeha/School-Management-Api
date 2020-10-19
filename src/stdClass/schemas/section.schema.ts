import * as mongoose from 'mongoose';

export const SectionSchema = new mongoose.Schema ({
section: { type: String, required: true }
});