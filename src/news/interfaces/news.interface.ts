import { Document } from 'mongoose';

export interface News extends Document {
    readonly news: string;
    readonly typeName: string;
}