import { Module } from '@nestjs/common';
import { EmpAtdnModule } from './modules/emp-Atdn.module';
import { StdAtdnModule } from './modules/std-Atdn.module';

@Module({
    imports: [EmpAtdnModule, StdAtdnModule]
})

export class AttendenceModule { }