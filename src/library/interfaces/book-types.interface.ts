import { Document } from 'mongoose';

export interface BookType extends Document {
    readonly bookType: string;
}