import { ParticipantTypeDto } from './participant-Type.dto';

export class ParticipationDto {
    readonly participant: string;
    readonly participantType: ParticipantTypeDto;
}