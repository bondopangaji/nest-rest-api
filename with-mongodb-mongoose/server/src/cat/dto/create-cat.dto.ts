import { Sex } from 'src/common/enums/sex.enum';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateCatDto {
  name: string;
  date_of_birth: Date;
  sex: Sex;
  breed?: MongooseSchema.Types.ObjectId;
  description: string;
  note: string;
}
