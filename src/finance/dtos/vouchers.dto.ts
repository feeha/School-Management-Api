import { VoucherDetailDto } from './voucher-detail.dto';
import { StdAdmnDto } from './../../students/dtos/std-admn.dto';

export class VouchersDto {
    readonly voucherNo: string;
    readonly stdAdmn: StdAdmnDto;
    readonly voucherDetail: VoucherDetailDto;
    readonly amount: string;
    readonly dueDate: Date;
    readonly isActive: boolean;
}