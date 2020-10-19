import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdBookReturnDto } from './../dtos/std-book-return.dto';
import { StdBookReturn } from './../interfaces/std-book-return.interface';

@Injectable()
export class StdBookReturnService {
    constructor(@Inject('STD_BOOK_RETURN_MODEL') private readonly stdBookReturnModel: Model<StdBookReturn>) { }

    async create(stdBookReturnDto: StdBookReturnDto): Promise<StdBookReturn> {
        const createStdBookReturn = new this.stdBookReturnModel(stdBookReturnDto);
        return await createStdBookReturn.save();
    }
    async findAll(): Promise<StdBookReturn[]> {
        return await this.stdBookReturnModel.find().exec();
    }
    async find(id: string): Promise<StdBookReturn> {
        return await this.stdBookReturnModel.findById(id);
    }
    async update(id: string, stdBookReturnDto: StdBookReturnDto): Promise<StdBookReturn> {
        return await this.stdBookReturnModel.findByIdAndUpdate(id, stdBookReturnDto);
    }
    async delete(id: string, stdBookReturnDto: StdBookReturnDto): Promise<StdBookReturn> {
        return await this.stdBookReturnModel.findByIdAndRemove(id, stdBookReturnDto);
    }
}