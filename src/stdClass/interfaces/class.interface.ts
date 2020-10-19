import { Document } from 'mongoose';
import { Section } from './section.interface';

export interface Class extends Document {
    readonly class: string;
    readonly section: Section;
}