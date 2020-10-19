import { Document } from 'mongoose';

export interface EventType extends Document {
    readonly eventType: string;
}