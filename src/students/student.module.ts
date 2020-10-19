import { Module } from '@nestjs/common';

import { CertificateModule } from './modules/certificate.module';
import { ClassRegModule } from './modules/class-reg.module';
import { DocTypeModule } from './modules/doc-type.module';
import { StdAdmnModule } from './modules/std-admn.module';
import { StdContactsModule } from './modules/std-contacts.module';
import { StdDocModule } from './modules/std-doc.module';
import { StdInfoModule } from './modules/std-info.module';

@Module({
    imports: [
        StdInfoModule,
        StdDocModule,
        StdContactsModule,
        StdAdmnModule,
        DocTypeModule,
        ClassRegModule,
        CertificateModule
    ]
})

export class StudentModule { }