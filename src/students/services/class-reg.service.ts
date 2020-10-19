import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ClassReg } from './../interfaces/class-reg.interface';
import { ClassRegDto } from './../dtos/class-reg.dto';

@Injectable()
export class ClassRegService {
    constructor(@Inject('CLASS_REG_MODEL') private readonly classRegModel: Model<ClassReg>) { }

    async create(classRegDto: ClassRegDto): Promise<ClassReg> {
        const createClassReg = new this.classRegModel(classRegDto);
        return await createClassReg.save();
    }

    async findAll(): Promise<ClassReg[]> {
        return await this.classRegModel.findAll().exec();
    }
    async find(id: string): Promise<ClassReg> {
        return await this.classRegModel.FindById(id).exec();
    }
    async update(id: string, classRegDto: ClassRegDto): Promise<ClassReg> {
        return await this.classRegModel.FindByIdAndUpdate(id, classRegDto);
    }
    async delete(id: string, classRegDto: ClassRegDto): Promise<ClassReg> {
        return await this.classRegModel.FindByIdAndRemove(id, classRegDto);
    }
}