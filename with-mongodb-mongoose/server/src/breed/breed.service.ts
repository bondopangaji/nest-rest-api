import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Breed, BreedDocument } from './schemas/breed.schema';

@Injectable()
export class BreedService {
  constructor(
    @InjectModel(Breed.name)
    private breedModel: Model<BreedDocument>,
  ) {}

  async create(createBreedDto: CreateBreedDto) {
    const breed = new this.breedModel(createBreedDto);
    return await breed.save();
  }

  async findAll() {
    return await this.breedModel
      .find()
      .populate({ path: 'cats', select: 'name' });
  }

  async findOne(_id: MongooseSchema.Types.ObjectId) {
    return await this.breedModel.findById(_id);
  }

  async update(
    _id: MongooseSchema.Types.ObjectId,
    updateBreedDto: UpdateBreedDto,
  ) {
    return await this.breedModel.findByIdAndUpdate(
      updateBreedDto._id,
      updateBreedDto,
      { new: true },
    );
  }

  async remove(_id: MongooseSchema.Types.ObjectId) {
    return await this.breedModel.findByIdAndDelete(_id);
  }
}
