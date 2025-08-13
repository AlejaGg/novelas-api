import { PaisOrigen } from './pais-origen.enum';

export type Novela = {
  id?: number;
  titulo: string;
  sinopsis?: string;
  paisOrigen: PaisOrigen;
  anioEstreno?: number;
};
