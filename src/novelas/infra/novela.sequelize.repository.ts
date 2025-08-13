import { InjectModel } from '@nestjs/sequelize';
import { NovelaModel } from './novela.model';
import { NovelaRepository } from '../domain/novela.repository';
import { Novela } from '../domain/novela.entity';

export class NovelaSequelizeRepository implements NovelaRepository {
  constructor(@InjectModel(NovelaModel) private model: typeof NovelaModel) {}

  async create(data: Novela): Promise<Novela> {
    const created = await this.model.create(data as any);
    return created.get({ plain: true }) as Novela;
  }

  async findAll(): Promise<Novela[]> {
    const rows = await this.model.findAll({ order: [['id', 'DESC']] });
    return rows.map(r => r.get({ plain: true })) as Novela[];
  }

   async findById(id: number): Promise<Novela | null> {   
    const r = await this.model.findByPk(id);
    return r ? (r.get({ plain: true }) as Novela) : null;
  }
}
