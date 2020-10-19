import { Document } from 'mongoose';

export interface NewsType extends Document {
    readonly typeName: string;
}