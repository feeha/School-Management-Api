import { FeeTypeDto } from './fee-type.dto';

export class VoucherDetailDto {
    readonly feeType: FeeTypeDto;
    readonly amount: string;
}