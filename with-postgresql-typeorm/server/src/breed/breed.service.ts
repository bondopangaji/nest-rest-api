import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,
  ) {}

  async create(createBreedDto: CreateBreedDto) {
    const breed: Breed = this.breedRepository.create(createBreedDto);
    return await this.breedRepository.save(breed);
  }

  async findAll() {
    return await this.breedRepository.find({ relations: ['cats'] });
  }

  async findOne(_id: string) {
    return await this.breedRepository.findOne(_id, { relations: ['cats'] });
  }

  async update(_id: string, updateBreedDto: UpdateBreedDto) {
    const breed: Breed = this.breedRepository.create(updateBreedDto);
    updateBreedDto._id = _id;
    return await this.breedRepository.save(breed);
  }

  async remove(_id: string) {
    return await this.breedRepository.delete(_id);
  }
}
