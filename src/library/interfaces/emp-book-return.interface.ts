import { Document } from 'mongoose';
import { EmpBookIssurance } from './emp-book-issuance.interface';

export interface EmpBookReturn extends Document {
    readonly empissurance: EmpBookIssurance;
    readonly isLate: boolean;
}