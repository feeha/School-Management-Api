import { ClassDto } from './class.dto';
import { SubjectsDto } from './subject.dto';
export class ScheduleDto {
    readonly class: ClassDto;
    readonly subjects: SubjectsDto;
}