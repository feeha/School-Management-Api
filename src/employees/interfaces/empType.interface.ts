import { Document } from 'mongoose';

export interface EmpType extends Document {
    readonly empType: string;
}