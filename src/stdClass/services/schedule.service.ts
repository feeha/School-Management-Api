import { Inject, Injectable, Post, Get } from '@nestjs/common';
import { Model } from 'mongoose';
import { Schedule } from '../interfaces/schedule.interface';
import { ScheduleDto } from '../dtos/schedule.dto';

@Injectable()
export class ScheduleService {
    constructor(@Inject('SCHEDULE_MODEL') private readonly scheduleModel: Model<'schedule', ScheduleDto>) { }

    async create(scheduleDto: ScheduleDto): Promise<Schedule> {
        const createSchedule = new this.scheduleModel(scheduleDto);
        return await createSchedule.save();
    }
    async findAll(): Promise<Schedule[]> {
        return await this.scheduleModel.findAll().exec();
    }
    async find(id: string): Promise<Schedule> {
        return await this.scheduleModel.find(id).exec();
    }
    async update(id: string, scheduleDto: ScheduleDto): Promise<Schedule> {
        return await this.scheduleModel.findByIdAndUpdate(id, scheduleDto);
    }
    async delete(id: string, scheduleDto: ScheduleDto): Promise<Schedule> {
        return await this.scheduleModel.findByIdAndRemove(id, scheduleDto);
    }
}