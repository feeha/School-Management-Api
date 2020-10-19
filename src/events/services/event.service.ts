import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Event } from './../interfaces/event.interface';
import { EventDto } from './../dtos/event.dto';

@Injectable()
export class EventService {
    constructor(@Inject('EVENT_MODEL') private readonly eventModel: Model<Event>) { }

    async create(eventDto: EventDto): Promise<Event> {
        const createEvent = new this.eventModel(eventDto);
        return await createEvent.save();
    }
    async findAll(): Promise<Event[]> {
        return await this.eventModel.find().exec();
    }
    async find(id: string): Promise<Event> {
        return await this.eventModel.findById(id).exec();
    }
    async update(id: string, eventDto: EventDto): Promise<Event> {
        return await this.eventModel.findByIdAndUpdate(id, eventDto);
    }
    async delete(id: string, eventDto: EventDto): Promise<Event> {
        return await this.eventModel.findByIdAndRemove(id, eventDto);
    }
}