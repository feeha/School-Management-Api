import * as mongoose from 'mongoose';

export const RegPackagesSchema = new mongoose.Schema({
    regPackages: { type: String, required: true },
    amount: { type: String, required: true }
});