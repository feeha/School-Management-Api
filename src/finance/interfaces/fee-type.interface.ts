import { Document } from 'mongoose';

export interface FeeType extends Document {
    readonly feeType: string;
    readonly amount: string;
}