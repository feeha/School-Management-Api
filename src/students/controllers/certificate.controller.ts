import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { CertificateService } from './../services/certificate.service';
import { CertificateDto } from './../dtos/certificate.dto';
import { Certificate } from './../interfaces/certificate.interface';

@Controller('certificate')
export class CertificateController {
    constructor(private readonly certificateService: CertificateService) { }

    @Post('/create')
    async create(@Body() certificateDto: CertificateDto) {
        return await this.certificateService.create(certificateDto);
    }
    @Get('/list')
    async findAll(): Promise<Certificate[]> {
        return await this.certificateService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.certificateService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() certificateDto: CertificateDto) {
        return await this.certificateService.update(id, certificateDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() certificateDto: CertificateDto) {
        return await this.certificateService.delete(id, certificateDto);
    }
}
