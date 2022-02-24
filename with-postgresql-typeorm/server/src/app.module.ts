import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from './cat/cat.module';
import { BreedModule } from './breed/breed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost' || '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'development_cat-rest-api',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    CatModule,
    BreedModule,
  ],
})
export class AppModule {}
