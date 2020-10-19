import * as mongoose from 'mongoose';

export const NewsTypeSchema = new mongoose.Schema({
    typeName: { type: String, required: true }
});