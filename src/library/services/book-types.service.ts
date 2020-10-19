import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { BookType } from './../interfaces/book-types.interface';
import { BookTypeDto } from './../dtos/book-types.dto';

@Injectable()
export class BookTypeService {
    constructor(@Inject('BOOK_TYPE_MODEL') private readonly bookTypeModel: Model<BookType>) { }

    async create(bookTypeDto: BookTypeDto): Promise<BookType> {
        const createBookType = new this.bookTypeModel(bookTypeDto);
        return await createBookType.save();
    }
    async findAll(): Promise<BookType[]> {
        return await this.bookTypeModel.find().exec();
    }
    async find(id: string): Promise<BookType> {
        return await this.bookTypeModel.findById(id);
    }
    async update(id: string, bookTypeDto: BookTypeDto): Promise<BookType> {
        return await this.bookTypeModel.findByIdAndUpdate(id, bookTypeDto);
    }
    async delete(id: string, bookTypeDto: BookTypeDto): Promise<BookType> {
        return await this.bookTypeModel.findByIdAndRemove(id, bookTypeDto);
    }
}
