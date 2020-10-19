import * as mongoose from 'mongoose';

export const StdContactsSchema = new mongoose.Schema ({
    stdContacts: { type: String, required: true }
});