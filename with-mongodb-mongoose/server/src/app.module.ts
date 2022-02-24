import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGO_CONNECTION } from './app.properties';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { BreedModule } from './breed/breed.module';

@Module({
  imports: [MongooseModule.forRoot(MONGO_CONNECTION), CatModule, BreedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
