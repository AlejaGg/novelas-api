import { Novela } from './novela.entity';

export const NOVELA_REPO = 'NOVELA_REPO';

export interface NovelaRepository {
  create(data: Novela): Promise<Novela>;
  findAll(): Promise<Novela[]>;
  findById(id: number): Promise<Novela | null>;
}
