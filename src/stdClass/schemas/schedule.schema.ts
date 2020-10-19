import * as mongoose from 'mongoose';
import { SubjectsSchema } from './subject.schema';
import { ClassSchema } from './class.schema';

export const ScheduleSchema = new mongoose.Schema ({
class: { type: ClassSchema, required: true },
subjects: { type: SubjectsSchema, required: true }
});