import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Breed } from 'src/breed/schemas/breed.schema';
import { Sex } from 'src/common/enums/sex.enum';

export type CatDocument = Cat & Document;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Cat {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  date_of_birth: Date;

  @Prop({ enum: Sex })
  sex: Sex;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Breed' })
  breed?: MongooseSchema.Types.ObjectId | Breed;

  @Prop()
  description: string;

  @Prop()
  note: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
