import { PartialType } from '@nestjs/mapped-types';
import { CreateBreedDto } from './create-breed.dto';
import { Schema as MongooseSchema } from 'mongoose';

export class UpdateBreedDto extends PartialType(CreateBreedDto) {
  _id: MongooseSchema.Types.ObjectId;
}
