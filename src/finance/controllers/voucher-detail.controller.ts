import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { VoucherDetailService } from './../services/voucher-detail.service';
import { VoucherDetailDto } from './../dtos/voucher-detail.dto';
import { VoucherDetail } from './../interfaces/voucher-detail.interface';

@Controller('voucherDetail')
export class VoucherDetailController {
    constructor(private readonly voucherDetailService: VoucherDetailService) { }

    @Post('/create')
    async create(@Body() voucherDetailDto: VoucherDetailDto) {
        return await this.voucherDetailService.create(voucherDetailDto);
    }
    @Get('/list')
    async findAll(): Promise<VoucherDetail[]> {
        return await this.voucherDetailService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.voucherDetailService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() voucherDetailDto: VoucherDetailDto) {
        return await this.voucherDetailService.update(id, voucherDetailDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() voucherDetailDto: VoucherDetailDto) {
        return await this.voucherDetailService.delete(id, voucherDetailDto);
    }
}