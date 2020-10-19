import * as mongoose from 'mongoose';
import { BookTypeSchema } from './book-types.schema';

export const BooksSchema = new mongoose.Schema({
    book: { type: String, required: true },
    publisher: { type: String, required: true },
    isbnNo: { type: String, required: true },
    price: { type: String, required: true },
    bookType: { type: BookTypeSchema, required: true }
});