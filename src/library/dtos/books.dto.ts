import { BookTypeDto } from './book-types.dto';

export class BooksDto {
readonly book: string;
readonly publisher: string;
readonly isbnNo: string;
readonly price: string;
readonly bookType: BookTypeDto;
}