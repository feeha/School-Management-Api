import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Participation } from './../interfaces/participation.interface';
import { ParticipationDto } from './../dtos/participation.dto';

@Injectable()
export class ParticipationService {
    constructor(@Inject('PARTICIPATION_MODEL') private readonly participationModel: Model<Participation>) { }

    async create(ParticipationDto: ParticipationDto): Promise<Participation> {
        const createParticipation = new this.participationModel(ParticipationDto);
        return await createParticipation.save();
    }
    async findAll(): Promise<Participation[]> {
        return await this.participationModel.find().exec();
    }
    async find(id: string): Promise<Participation> {
        return await this.participationModel.findById(id).exec();
    }
    async update(id: string, ParticipationDto: ParticipationDto): Promise<Participation> {
        return await this.participationModel.findByIdAndUpdate(id, ParticipationDto);
    }
    async delete(id: string, ParticipationDto: ParticipationDto): Promise<Participation> {
        return await this.participationModel.findByIdAndRemove(id, ParticipationDto);
    }
}