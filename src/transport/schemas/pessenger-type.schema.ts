import * as mongoose from 'mongoose';

export const PessengerTypeSchema = new mongoose.Schema({
    passengerType: { type: String, required: true }
});