import { StdInfoDto } from './std-info.dto';
import { ClassDto } from '../../stdClass/dtos/class.dto';

export class ClassRegDto {
    readonly stdInfo: StdInfoDto;
    readonly class: ClassDto;
}