import { Document } from 'mongoose';

export interface Vans extends Document {
    readonly driver: string;
    readonly vanNo: string;
    readonly timing: string;
}