import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DocTypeDto } from './../dtos/doc-type.dto';
import { DocType } from './../interfaces/doc-type.interface';

@Injectable()
export class DocTypeService {
    constructor(@Inject('DOC_TYPE_MODEL') private readonly docTypeModel: Model<DocType>) { }

    async create(docTypeDto: DocTypeDto): Promise<DocType> {
        const createDocType = new this.docTypeModel(docTypeDto);
        return await createDocType.save();
    }

    async findAll(): Promise<DocType[]> {
        return await this.docTypeModel.findAll().exec();
    }
    async find(id: string): Promise<DocType> {
        return await this.docTypeModel.FindById(id).exec();
    }
    async update(id: string, docTypeDto: DocTypeDto): Promise<DocType> {
        return await this.docTypeModel.FindByIdAndUpdate(id, docTypeDto);
    }
    async delete(id: string, docTypeDto: DocTypeDto): Promise<DocType> {
        return await this.docTypeModel.FindByIdAndRemove(id, docTypeDto);
    }
}