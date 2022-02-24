import { Breed } from 'src/breed/entities/breed.entity';
import { Sex } from 'src/common/enums/sex.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'cats' })
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ type: 'varchar', length: '128' })
  name: string;

  @Column({ name: 'date_of_birth', type: 'timestamptz', nullable: true })
  dob: Date;

  @Column({ type: 'enum', enum: Sex })
  sex: Sex;

  @Column({ name: 'breed_id', type: 'uuid', nullable: true })
  breedId?: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @ManyToOne(() => Breed, (breed) => breed.cats)
  breed: Breed;
}
