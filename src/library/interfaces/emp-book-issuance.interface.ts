import { Document } from 'mongoose';
import { Books } from './books.interface';

export interface EmpBookIssurance extends Document {
    readonly book: Books;
    readonly receiver: string;
    readonly dueDate: Date;
}