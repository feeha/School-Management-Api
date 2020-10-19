import { Inject, Injectable, Post, Get } from '@nestjs/common';
import { Model } from 'mongoose';
import { SectionDto } from '../dtos/section.dto';
import { Section } from '../interfaces/section.interface';

@Injectable()
export class SectionService {
    constructor(@Inject('SECTION_MODEL') private readonly sectionModel: Model<'section', SectionDto>) { }

    async create(sectionDto: SectionDto): Promise<Section> {
        const createSection = new this.sectionModel(sectionDto);
        return await createSection.save();
    }
    async findAll(): Promise<Section[]> {
        return await this.sectionModel.findAll().exec();
    }
    async find(id: string): Promise<Section> {
        return await this.sectionModel.find(id).exec();
    }
    async update(id: string, sectionDto: SectionDto): Promise<Section> {
        return await this.sectionModel.findByIdAndUpdate(id, sectionDto);
    }
    async delete(id: string, sectionDto: SectionDto): Promise<Section> {
        return await this.sectionModel.findByIdAndRemove(id, sectionDto);
    }
}