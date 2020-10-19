import { EmpInfoDto } from './empInfo.dto';

export class EmpRegDto {
    readonly empInfo: EmpInfoDto;
    readonly empType: string;
    readonly salary: string;
}