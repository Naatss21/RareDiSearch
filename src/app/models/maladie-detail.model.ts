import { Maladie } from './maladie.model';
import { Gene } from './gene.model';
import { Symptome } from './symptome.model';

export interface MaladieDetail extends Maladie {
  genes: Gene[];
  symptomes: Symptome[];
}