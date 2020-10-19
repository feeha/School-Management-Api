import { StdDocSchema } from './std-doc.schema';
import { StdContactsSchema } from './std-contacts.schema';
import * as mongoose from 'mongoose';

export const StdInfoSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    rollNo: { type: String, required: true },
    stdContacts: { type: StdContactsSchema, required: true },
    address: { type: String, required: true },
    stdDoc: { type: StdDocSchema, required: true }
});