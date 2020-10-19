import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { News } from '../interfaces/news.interface';
import { NewsDto } from './../dtos/news.dto';

@Injectable()
export class NewsService {

    constructor(@Inject('NEWS_MODEL') private readonly newsModel: Model<News>) { }

    async create(newsDto: NewsDto): Promise<News> {
        const createNews = new this.newsModel(newsDto);
        return await createNews.save();
    }
    async findAll(): Promise<News[]> {
        return await this.newsModel.find().exec();
    }
    async find(id: string): Promise<News> {
        return await this.newsModel.findById(id).exec();
    }
    async update(id: string, newsDto: NewsDto): Promise<News> {
        return await this.newsModel.findByIdAndUpdate(id, newsDto);
    }
    async delete(id: string, newsDto: NewsDto): Promise<News> {
        return await this.newsModel.findByIdAndRemove(id, newsDto);
    }
};
