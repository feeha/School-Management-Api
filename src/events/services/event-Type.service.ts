import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EventType } from './../interfaces/event-Type.interface';
import { EventTypeDto } from './../dtos/event-Type.dto';

@Injectable()
export class EventTypeService {
    constructor(@Inject('EVENT_TYPE_MODEL') private readonly eventTypeModel: Model<EventType>) { }

    async create(eventTypeDto: EventTypeDto): Promise<EventType> {
        const createEventType = new this.eventTypeModel(eventTypeDto);
        return await createEventType.save();
    }
    async findAll(): Promise<EventType[]> {
        return await this.eventTypeModel.find().exec();
    }
    async find(id: string): Promise<EventType> {
        return await this.eventTypeModel.findById(id).exec();
    }
    async update(id: string, eventTypeDto: EventTypeDto): Promise<EventType> {
        return await this.eventTypeModel.findByIdAndUpdate(id, eventTypeDto);
    }
    async delete(id: string, eventTypeDto: EventTypeDto): Promise<EventType> {
        return await this.eventTypeModel.findByIdAndRemove(id, eventTypeDto);
    }
}