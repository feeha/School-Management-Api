import { Document } from 'mongoose';

export interface RegPackages extends Document {
    readonly regPackages: string;
    readonly amount: string;
} 