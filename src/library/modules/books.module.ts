import { Module } from '@nestjs/common';
import { DatabaseModule } from './../../database/database.module';

import { BooksService } from './../services/books.service';
import { BooksController } from './../controllers/books.controller';
import { booksProvider } from '../providers/books.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [BooksController],
    providers: [BooksService, ...booksProvider]
})

export class BooksModule { }