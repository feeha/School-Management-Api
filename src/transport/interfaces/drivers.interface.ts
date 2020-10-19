import { Document } from 'mongoose';

export interface Drivers extends Document {
    readonly name: string;
    readonly contactNo: string;
    readonly address: string;
}