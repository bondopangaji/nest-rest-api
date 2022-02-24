import { Sex } from 'src/common/enums/sex.enum';

export class CreateCatDto {
  name: string;
  dob: Date;
  sex: Sex;
  description: string;
  note: string;
  breedId?: string;
}
