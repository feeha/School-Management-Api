import * as mongoose from 'mongoose';
import { EventTypeSchema } from './event-Type.schema';

export const EventSchema = new mongoose.Schema({
    eventType: { type: EventTypeSchema, required: true },
    timing: { type: String, required: true },
    eventVenue: { type: String, required: true },
    venueAddress: { type: String, required: true },
    dueDate: { type: Date, required: true },
    date: { type: Date, default: Date.now }
});