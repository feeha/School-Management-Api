import { Document } from 'mongoose';
import { EventType } from './event-Type.interface';

export interface Event extends Document {
    readonly eventType: EventType;
    readonly timing: string;
    readonly eventVenue: string;
    readonly venueAddress: string;
    readonly dueDate: string;
}