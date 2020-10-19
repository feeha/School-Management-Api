import { EmpBookIssuanceDto } from './emp-book-issuance.dto';

export class EmpBookReturnDto {
    readonly empissurance: EmpBookIssuanceDto;
    readonly isLate: boolean;
}