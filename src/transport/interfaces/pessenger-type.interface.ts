import { Document } from 'mongoose';

export interface PessengerType extends Document {
    readonly pessengerType: string;
}