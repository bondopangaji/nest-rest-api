import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name)
    private catModel: Model<CatDocument>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    const cat = new this.catModel(createCatDto);
    return await cat.save();
  }

  async findAll() {
    return await this.catModel
      .find()
      .populate({ path: 'breed', select: 'name' });
  }

  async findOne(_id: MongooseSchema.Types.ObjectId) {
    return await this.catModel.findById(_id);
  }

  async update(_id: MongooseSchema.Types.ObjectId, updateCatDto: UpdateCatDto) {
    return await this.catModel.findByIdAndUpdate(
      updateCatDto._id,
      updateCatDto,
      {
        new: true,
      },
    );
  }

  async remove(_id: MongooseSchema.Types.ObjectId) {
    return await this.catModel.findByIdAndDelete(_id);
  }
}
