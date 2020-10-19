import { Document } from 'mongoose';
import { ParticipantType } from './participant-Type.interface';

export interface Participation extends Document {
    readonly participant: string;
    readonly participantType: ParticipantType;
}