import { LibraryModule } from './library/library.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { AttendenceModule } from './attendence/attendence.module';
import { EmployeesModule } from './employees/employees.module';
import { StudentModule } from './students/student.module';
import { StdClassModule } from './stdClass/stdClass.module';
import { TransportModule } from './transport/transport.module';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports:
    [
      NewsModule,
      EventsModule,
      LibraryModule,
      StudentModule,
      FinanceModule,
      StdClassModule,
      EmployeesModule,
      AttendenceModule,
      TransportModule
    ],

  controllers: [AppController],
  providers: [AppService],

})

export class AppModule { }