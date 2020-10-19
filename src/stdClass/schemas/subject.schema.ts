import * as mongoose from 'mongoose';

export const SubjectsSchema = new mongoose.Schema ({
subjects: { type: String, required: true } 
});