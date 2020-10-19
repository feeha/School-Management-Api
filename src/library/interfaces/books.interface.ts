import { Document } from 'mongoose';
import { BookType } from './book-types.interface';

export interface Books extends Document {
readonly book: string;
readonly publisher: string;
readonly isbnNo: string;
readonly price: string;
readonly bookType: BookType;
}