import { Document } from 'mongoose';
import { Class } from './class.interface';
import { Subjects } from './subject.interface';

export interface Schedule extends Document {
    readonly subjects: Subjects;
    readonly class: Class;
}