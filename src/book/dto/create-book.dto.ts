import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Category } from '../schema/book.schema';
import { User } from '../../auth/schema/user.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Invalid category' })
  readonly category: Category;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsEmpty({ message: 'You are not allowed to pass user id' })
  readonly user: User;
}
