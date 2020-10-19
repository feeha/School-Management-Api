import { Document } from 'mongoose';
import { StdInfo } from '../../students/interfaces/std-info.interface';

export interface Accounts extends Document {
    readonly acCode: string;
    readonly acName: string;
    readonly stdInfo: StdInfo;
    readonly isActive: boolean;
}