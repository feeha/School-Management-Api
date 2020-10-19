import { Document } from 'mongoose';

export interface Penalties extends Document {
    readonly penaltyName: string;
    readonly amount: String;
}