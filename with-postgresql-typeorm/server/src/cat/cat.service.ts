import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    const cat: Cat = this.catRepository.create(createCatDto);
    if (cat.breedId === '') {
      cat.breedId = null;
    }
    return await this.catRepository.save(cat);
  }

  async findAll() {
    return await this.catRepository.find({ relations: ['breed'] });
  }

  async findOne(_id: string) {
    return await this.catRepository.findOne(_id, { relations: ['breed'] });
  }

  async update(_id: string, updateCatDto: UpdateCatDto) {
    const cat: Cat = this.catRepository.create(updateCatDto);
    updateCatDto._id = _id;
    if (cat.breedId === '') {
      cat.breedId = null;
    }
    return await this.catRepository.save(cat);
  }

  async remove(_id: string) {
    return await this.catRepository.delete(_id);
  }
}
