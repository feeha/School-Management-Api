import { StdInfoDto } from '../../students/dtos/std-info.dto';

export class AccountsDto {
    readonly acCode: string;
    readonly acName: string;
    readonly stdInfo: StdInfoDto;
    readonly isActive: boolean;
}