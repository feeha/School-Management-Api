import { PessengerTypeDto } from './pessenger-type.dto';
import { RegPackagesDto } from './reg-packages.dto';

export class VanRegDto {
    readonly vanNo: string;
    readonly regPackage: RegPackagesDto;
    readonly pessengerType: PessengerTypeDto;
}