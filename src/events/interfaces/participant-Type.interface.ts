import { Document } from 'mongoose';

export interface ParticipantType extends Document {
    readonly participantType: string;
}