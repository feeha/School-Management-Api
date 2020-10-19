import { Inject, Injectable, Post, Get } from '@nestjs/common';
import { Model } from 'mongoose';
import { Class } from '../interfaces/class.interface';
import { ClassDto } from '../dtos/class.dto';

@Injectable()
export class ClassService {
    constructor(@Inject('CLASS_MODEL') private readonly classModel: Model<'class', ClassDto>) { }

    async create(classDto: ClassDto): Promise<Class> {
        const createClass = new this.classModel(classDto);
        return await createClass.save();
    }
    async findAll(): Promise<Class[]> {
        return await this.classModel.findAll().exec();
    }
    async find(id: string): Promise<Class> {
        return await this.classModel.find(id).exec();
    }
    async update(id: string, classDto: ClassDto): Promise<Class> {
        return await this.classModel.findByIdAndUpdate(id, classDto);
    }
    async delete(id: string, classDto: ClassDto): Promise<Class> {
        return await this.classModel.findByIdAndRemove(id, classDto);
    }
}