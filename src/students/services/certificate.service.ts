import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CertificateDto } from './../dtos/certificate.dto';
import { Certificate } from './../interfaces/certificate.interface';

@Injectable()
export class CertificateService {
    constructor(@Inject('CERTIFICATE_MODEL') private readonly certificateModel: Model<Certificate>) { }

    async create(certificateDto: CertificateDto): Promise<Certificate> {
        const createCertificate = new this.certificateModel(certificateDto);
        return await createCertificate.save();
    }
    async findAll(): Promise<Certificate[]> {
        return await this.certificateModel.findAll().exec();
    }
    async find(id: string): Promise<Certificate> {
        return await this.certificateModel.FindById(id).exec();
    }
    async update(id: string, certificateDto: CertificateDto): Promise<Certificate> {
        return await this.certificateModel.FindByIdAndUpdate(id, certificateDto);
    }
    async delete(id: string, certificateDto: CertificateDto): Promise<Certificate> {
        return await this.certificateModel.FindByIdAndRemove(id, certificateDto);
    }
}