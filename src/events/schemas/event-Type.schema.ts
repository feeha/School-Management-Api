import * as mongoose from 'mongoose';

export const EventTypeSchema = new mongoose.Schema({
    eventType: { type: String, required: true }
});