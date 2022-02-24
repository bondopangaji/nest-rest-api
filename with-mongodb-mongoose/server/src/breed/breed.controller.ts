import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Schema as MongooseSchema } from 'mongoose';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedService.create(createBreedDto);
  }

  @Get()
  findAll() {
    return this.breedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: MongooseSchema.Types.ObjectId) {
    return this.breedService.findOne(_id);
  }

  @Patch(':id')
  update(
    @Param('id') _id: MongooseSchema.Types.ObjectId,
    @Body() updateBreedDto: UpdateBreedDto,
  ) {
    return this.breedService.update(_id, updateBreedDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: MongooseSchema.Types.ObjectId) {
    return this.breedService.remove(_id);
  }
}
