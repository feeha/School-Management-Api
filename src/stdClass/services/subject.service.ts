import { Inject, Injectable, Post, Get } from '@nestjs/common';
import { Model } from 'mongoose';
import { SubjectsDto } from '../dtos/subject.dto';
import { Subjects } from '../interfaces/subject.interface';

@Injectable()
export class SubjectsService {
    constructor(@Inject('SUBJECTS_MODEL') private readonly subjectsModel: Model<'subjects', SubjectsDto>) { }

    async create(subjectsDto: SubjectsDto): Promise<Subjects> {
        const createSubjects = new this.subjectsModel(subjectsDto);
        return await createSubjects.save();
    }
    async findAll(): Promise<Subjects[]> {
        return await this.subjectsModel.findAll().exec();
    }
    async find(id: string): Promise<Subjects> {
        return await this.subjectsModel.find(id).exec();
    }
    async update(id: string, subjectsDto: SubjectsDto): Promise<Subjects> {
        return await this.subjectsModel.findByIdAndUpdate(id, subjectsDto);
    }
    async delete(id: string, subjectsDto: SubjectsDto): Promise<Subjects> {
        return await this.subjectsModel.findByIdAndRemove(id, subjectsDto);
    }
}