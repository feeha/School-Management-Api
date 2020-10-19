import { Document } from 'mongoose';
import { StdBookIssurance } from './std-book-issurance.interface';

export interface StdBookReturn extends Document {
    readonly stdissurance: StdBookIssurance;
    readonly isLate: boolean;
}