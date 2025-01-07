import {
  IsEmpty,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Category } from '../schema/book.schema';
import { User } from '../../auth/schema/user.schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Please enter correct category.' })
  readonly category: Category;

  @IsEmpty({ message: 'You are not allowed to pass user id' })
  readonly user: User;
}
