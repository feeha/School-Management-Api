import { Document } from 'mongoose';
import { DocType } from './doc-type.interface';

export interface StdDoc extends Document {
    readonly documents: string;
    readonly docType: DocType ;
}