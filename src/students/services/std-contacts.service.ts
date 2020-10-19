import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StdContacts } from './../interfaces/std-contacts.interface';
import { StdContactsDto } from './../dtos/std-contacts.dto';

@Injectable()
export class StdContactsService {
    constructor(@Inject('STD_CONTACTS_MODEL') private readonly stdContactsModel: Model<StdContacts>) { }

    async create(stdContactsDto: StdContactsDto): Promise<StdContacts> {
        const createStdContacts = new this.stdContactsModel(stdContactsDto);
        return await createStdContacts.save();
    }

    async findAll(): Promise<StdContacts[]> {
        return await this.stdContactsModel.findAll().exec();
    }
    async find(id: string): Promise<StdContacts> {
        return await this.stdContactsModel.FindById(id).exec();
    }
    async update(id: string, stdContactsDto: StdContactsDto): Promise<StdContacts> {
        return await this.stdContactsModel.FindByIdAndUpdate(id, stdContactsDto);
    }
    async delete(id: string, stdContactsDto: StdContactsDto): Promise<StdContacts> {
        return await this.stdContactsModel.FindByIdAndRemove(id, stdContactsDto);
    }
}