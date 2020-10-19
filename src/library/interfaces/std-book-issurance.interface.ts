import { Document } from 'mongoose';
import { Books } from './books.interface';

export interface StdBookIssurance extends Document {
    readonly book: Books;
    readonly receiver: string;
    readonly dueDate: Date;
}