import { Document } from 'mongoose';

export interface Report extends Document {
    readonly ledger: string;
    readonly balanceSheet: string;
}