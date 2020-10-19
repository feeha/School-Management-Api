import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';

import { SectionService } from '../services/section.service';
import { SectionController } from '../controllers/section.controller';
import { sectionProvider } from '../providers/section.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [SectionController],
    providers: [SectionService, ...sectionProvider]
})

export class SectionModule { }