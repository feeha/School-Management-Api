import { BooksDto } from './books.dto';

export class StdBookIssuanceDto {
    readonly book: BooksDto;
    readonly receiver: string;
    readonly dueDate: Date;
}