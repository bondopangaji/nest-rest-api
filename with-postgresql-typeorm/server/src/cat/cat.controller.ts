import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return await this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.catService.findOne(_id);
  }

  @Patch(':id')
  async update(@Param('id') _id: string, @Body() updateCatDto: UpdateCatDto) {
    return await this.catService.update(_id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') _id: string) {
    return await this.catService.remove(_id);
  }
}
