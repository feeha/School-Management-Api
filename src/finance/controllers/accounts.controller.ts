import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { Accounts } from './../interfaces/accounts.interface';
import { AccountsDto } from './../dtos/accounts.dto';
import { AccountsService } from './../services/accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Post('/create')
    async create(@Body() accountsDto: AccountsDto) {
        return await this.accountsService.create(accountsDto);
    }
    @Get('/list')
    async findAll(): Promise<Accounts[]> {
        return await this.accountsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return await this.accountsService.find(id);
    }
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() accountsDto: AccountsDto) {
        return await this.accountsService.update(id, accountsDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Body() accountsDto: AccountsDto) {
        return await this.accountsService.delete(id, accountsDto);
    }
}