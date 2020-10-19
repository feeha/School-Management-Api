import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema ({
    ledger: { type: String, required: true },
    balanceSheet: { type: String, required: true }
});