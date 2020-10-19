import { StdContactsDto } from './std-contacts.dto';
import { StdDocDto } from './std-doc.dto';

export class StdInfoDto {
    readonly name: string;
    readonly fatherName: string;
    readonly dateOfBirth: string;
    readonly rollNo: string;
    readonly stdContacts: StdContactsDto;
    readonly address: string;
    readonly stdDoc: StdDocDto;
}