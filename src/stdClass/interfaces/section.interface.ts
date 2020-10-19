import { Document } from 'mongoose';

export interface Section extends Document {
    readonly section: string;
}