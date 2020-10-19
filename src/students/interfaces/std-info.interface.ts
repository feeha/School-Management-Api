import { Document } from 'mongoose';
import { StdDoc } from '../interfaces/std-doc.interface';
import { StdContacts } from './std-contacts.interface';

export interface StdInfo extends Document {
    readonly name: string;
    readonly fatherName: string;
    readonly dateOfBirth: string;
    readonly rollNo: string;
    readonly stdContacts: StdContacts;
    readonly address: string;
    readonly stdDoc: StdDoc;
}