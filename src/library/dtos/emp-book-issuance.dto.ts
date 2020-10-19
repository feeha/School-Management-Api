import { BooksDto } from './books.dto';

export class EmpBookIssuanceDto {
    readonly book: BooksDto;
    readonly receiver: string;
    readonly dueDate: Date;
}