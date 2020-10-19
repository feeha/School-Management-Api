import { StdBookIssuanceDto } from './std-book-issurance.dto';

export class StdBookReturnDto {
    readonly stdissurance: StdBookIssuanceDto;
    readonly isLate: boolean;
}