import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ParticipantType } from './../interfaces/participant-Type.interface';
import { ParticipantTypeDto } from './../dtos/participant-Type.dto';

@Injectable()
export class ParticipantTypeService {
    constructor(@Inject('PARTICIPANT_TYPE_MODEL') private readonly ParticipantType: Model<ParticipantType>) { }

    async create(participantTypeDto: ParticipantTypeDto): Promise<ParticipantType> {
        const createParticipantType = new this.ParticipantType(participantTypeDto);
        return await createParticipantType.save();
    }
    async findAll(): Promise<ParticipantType[]> {
        return await this.ParticipantType.find().exec();
    }
    async find(id: string): Promise<ParticipantType> {
        return await this.ParticipantType.findById(id).exec();
    }
    async update(id: string, participantTypeDto: ParticipantTypeDto): Promise<ParticipantType> {
        return await this.ParticipantType.findByIdAndUpdate(id, participantTypeDto);
    }
    async delete(id: string, participantTypeDto: ParticipantTypeDto): Promise<ParticipantType> {
        return await this.ParticipantType.findByIdAndRemove(id, participantTypeDto);
    }
}