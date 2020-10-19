import { Module } from '@nestjs/common';

import { StdBookReturnModule } from './modules/std-book-return.module';
import { BooksTypesModule } from './modules/book-types.module';
import { BooksModule } from './modules/books.module';
import { PenaltiesModule } from './modules/penalties.module';
import { EmpBookReturnModule } from './modules/emp-book-return.module';
import { EmpBookIssuanceModule } from './modules/emp-book-issuance.module';
import { StdBookIssuanceModule } from './modules/std-book-issurance.module';

@Module({
    imports: [
        BooksModule,
        BooksTypesModule,
        PenaltiesModule,
        EmpBookReturnModule,
        StdBookReturnModule,
        EmpBookIssuanceModule,
        StdBookIssuanceModule
    ]
})

export class LibraryModule { }