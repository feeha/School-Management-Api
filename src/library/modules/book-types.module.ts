import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { bookTypeProvider } from './../providers/book-types.provider';
import { BookTypeService } from './../services/book-types.service';
import { BookTypeController } from './../controllers/book-types.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [BookTypeController],
    providers: [BookTypeService, ...bookTypeProvider]
})

export class BooksTypesModule { }