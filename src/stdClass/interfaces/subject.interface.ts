import { Document } from 'mongoose';

export interface Subjects extends Document {
    readonly subjects: string;
}