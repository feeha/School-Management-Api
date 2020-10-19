import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Accounts } from './../interfaces/accounts.interface';
import { AccountsDto } from './../dtos/accounts.dto';

@Injectable()
export class AccountsService {
    constructor(@Inject('ACCOUNTS_MODEL') private readonly accountsModel: Model<Accounts>) { }

    async create(accountsDto: AccountsDto): Promise<Accounts> {
        const createAccounts = new this.accountsModel(accountsDto);
        return await createAccounts.save();
    }
    async findAll(): Promise<Accounts[]> {
        return await this.accountsModel.findAll().exec();
    }
    async find(id: string): Promise<Accounts> {
        return await this.accountsModel.find(id).exec();
    }
    async update(id: string, accountsDto: AccountsDto): Promise<Accounts> {
        return await this.accountsModel.findByIdAndUpdate(id, accountsDto);
    }
    async delete(id: string, accountsDto: AccountsDto): Promise<Accounts> {
        return await this.accountsModel.findByIdAndRemove(id, accountsDto);
    }
}