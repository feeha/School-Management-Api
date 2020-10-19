import { Document } from 'mongoose';
import { EmpInfo } from './empInfo.interface';

export interface EmpReg extends Document {
    readonly empInfo: EmpInfo;
    readonly empType: string;
    readonly salary: string;
}