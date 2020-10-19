import { Document } from 'mongoose';

export interface StdAtdn extends Document {
    readonly student: string;
    readonly status: string;
    readonly leave: string;
}