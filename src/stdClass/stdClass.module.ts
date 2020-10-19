import { Module } from '@nestjs/common';

import { SectionModule } from './modules/section.module';
import { ClassModule } from './modules/class.module';
import { ScheduleModule } from './modules/schedule.module';
import { SubjectsModule } from './modules/subject.module';

@Module({
    imports: [
        ClassModule,
        SectionModule,
        ScheduleModule,
        SubjectsModule],

})

export class StdClassModule { }