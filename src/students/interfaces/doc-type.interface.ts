import { Document } from 'mongoose';

export interface DocType extends Document {
    readonly doctype: string;
}