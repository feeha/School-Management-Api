import * as mongoose from 'mongoose';
import { ParticipantTypeSchema } from './participant-Type.schema';

export const ParticipationSchema = new mongoose.Schema({
    participant: { type: String, required: true },
    participantType: { type: ParticipantTypeSchema, required: true },
    date: { type: Date, default: Date.now }
});