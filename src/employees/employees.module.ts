import { Module } from '@nestjs/common';

import { EmpRegModule } from './modules/empReg.module';
import { EmpTypeModule } from './modules/empType.module';
import { EmpInfoModule } from './modules/empInfo.module';

@Module({
    imports: [EmpInfoModule, EmpRegModule, EmpTypeModule]
})

export class EmployeesModule { }