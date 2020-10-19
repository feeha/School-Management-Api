import * as mongoose from 'mongoose';

export const ParticipantTypeSchema = new mongoose.Schema({
    participantType: { type: String, required: true }
});