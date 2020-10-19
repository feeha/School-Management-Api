import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { CertificateService } from './../services/certificate.service';
import { CertificateController } from './../controllers/certificate.controller';
import { certificateProvider } from '../providers/certificate.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [CertificateController],
    providers: [CertificateService, ...certificateProvider]
})

export class CertificateModule { }