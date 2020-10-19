import { Document } from 'mongoose';

export interface StdContacts extends Document {
    readonly stdContacts: string;
}