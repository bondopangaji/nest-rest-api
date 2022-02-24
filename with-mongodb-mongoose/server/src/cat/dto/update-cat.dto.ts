import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { Schema as MongooseSchema } from 'mongoose';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  _id: MongooseSchema.Types.ObjectId;
}
