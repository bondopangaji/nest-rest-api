import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed, BreedSchema } from './schemas/breed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }]),
  ],
  controllers: [BreedController],
  providers: [BreedService],
})
export class BreedModule {}
