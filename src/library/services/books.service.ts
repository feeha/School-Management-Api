import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Books } from './../interfaces/books.interface';
import { BooksDto } from './../dtos/books.dto';

@Injectable()
export class BooksService {
    constructor(@Inject('BOOKS_MODEL') private readonly booksModel: Model<Books>) { }

    async create(booksDto: BooksDto): Promise<Books> {
        const createBooks = new this.booksModel(booksDto);
        return await createBooks.save();
    }
    async findAll(): Promise<Books[]> {
        return await this.booksModel.find().exec();
    }
    async find(id: string): Promise<Books> {
        return await this.booksModel.findById(id);
    }
    async update(id: string, booksDto: BooksDto): Promise<Books> {
        return await this.booksModel.findByIdAndUpdate(id, booksDto);
    }
    async delete(id: string, booksDto: BooksDto): Promise<Books> {
        return await this.booksModel.findByIdAndRemove(id, booksDto);
    }
}