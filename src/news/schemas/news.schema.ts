import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema({
    news: { type: String, required: true },
    typeName: { type: String, required: true },
    newsDate: { type: Date, default: Date.now }
});