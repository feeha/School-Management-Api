import { Document } from 'mongoose';
import { StdInfo } from './std-info.interface';

export interface Certificate extends Document {
    readonly Certificate: string;
    readonly stdInfo: StdInfo;
}