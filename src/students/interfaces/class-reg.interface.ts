import { Document } from 'mongoose';
import { StdInfo } from './std-info.interface';
import { Class } from 'src/stdClass/interfaces/class.interface';

export interface ClassReg extends Document {
    readonly stdInfo: StdInfo;
    readonly class: Class;
} 