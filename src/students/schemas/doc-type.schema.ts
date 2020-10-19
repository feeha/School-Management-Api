import * as mongoose from 'mongoose';

export const DocTypeSchema = new mongoose.Schema ({
    docType: { type: String, required: true }
});