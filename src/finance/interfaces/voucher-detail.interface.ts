import { Document } from 'mongoose';
import { FeeType } from './fee-type.interface';

export interface VoucherDetail extends Document {
    readonly feeType: FeeType;
    readonly amount: string;
    
}