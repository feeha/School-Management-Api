import * as mongoose from 'mongoose';
import { ClassSchema } from '../../stdClass/schemas/class.schema';
import { StdInfoSchema } from './std-info.schema';

export const ClassRegSchema = new mongoose.Schema ({
    stdInfo: { type: StdInfoSchema, required: true },
    class: { type: ClassSchema, required: true },
    date: { type: Date, default: Date.now}
});