import { Document } from 'mongoose';

export interface EmpAtdn extends Document {
    readonly employee: string;
    readonly status: string;
    readonly leave: string;
}