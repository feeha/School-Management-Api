import * as mongoose from 'mongoose';
import { BooksSchema } from './books.schema';

export const EmpBookIssuranceSchema = new mongoose.Schema({
    book: { type: BooksSchema, required: true },
    date: { type: Date, default: Date.now},
    receiver: { type: String, required: true },
    dueDate: { type: Date, required: true },
});