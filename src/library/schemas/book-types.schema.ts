import * as mongoose from 'mongoose';

export const BookTypeSchema = new mongoose.Schema({
    bookType: { type: String, required: true }
});