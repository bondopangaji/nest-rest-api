import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Cat } from 'src/cat/schemas/cat.schema';

export type BreedDocument = Breed & Document;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Breed {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
