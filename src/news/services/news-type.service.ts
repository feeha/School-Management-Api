import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { NewsTypeDto } from './../dtos/news-type.dto';
import { NewsType } from './../interfaces/news-type.interface';

@Injectable()
export class NewsTypeService {

    constructor(@Inject('NEWS_TYPE_MODEL') private readonly newsTypeModel: Model<NewsType>) { }

    async create(newsTypeDto: NewsTypeDto): Promise<NewsType> {
        const createNewsType = new this.newsTypeModel(newsTypeDto);
        return await createNewsType.save();
    }
    async findAll(): Promise<NewsType[]> {
        return await this.newsTypeModel.find().exec();
    }
    async find(id: string): Promise<NewsType> {
        return await this.newsTypeModel.findById(id).exec();
    }
    async update(id: string, newsTypeDto: NewsTypeDto): Promise<NewsType> {
        return await this.newsTypeModel.findByIdAndUpdate(id, NewsTypeDto);
    }
    async delete(id: string, newsTypeDto: NewsTypeDto): Promise<NewsType> {
        return await this.newsTypeModel.findByIdAndRemove(id, newsTypeDto);
    }
};
