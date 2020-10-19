import { IsNotEmpty } from 'class-validator';
import { EventTypeDto } from './event-Type.dto';

export class EventDto {
    @IsNotEmpty()
    readonly eventType: EventTypeDto;
    readonly timing: string;
    readonly eventVenue: string;
    readonly venueAddress: string;
    readonly dueDate: Date;
}
