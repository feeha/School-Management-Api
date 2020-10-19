import { Document } from 'mongoose';
import { StdInfo } from './std-info.interface';

export interface StdAdmn extends Document {
    readonly testScore: string;
    readonly stdInfo: StdInfo;
} 