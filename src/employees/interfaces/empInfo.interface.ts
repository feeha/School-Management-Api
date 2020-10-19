import { Document } from 'mongoose';

export interface EmpInfo extends Document {
    readonly name: string;
    readonly age: string;
    readonly cnicNo: string;
    readonly email: string;
    readonly address: string;
    readonly contactNo: string;
    readonly experience: string;
}