import { Document } from 'mongoose';
import { RegPackages } from './reg-packages.interface';
import { PessengerType } from './pessenger-type.interface';

export interface VanReg extends Document {
    readonly vanNo: string;
    readonly regPackage: RegPackages;
    readonly pessengerType: PessengerType;
}