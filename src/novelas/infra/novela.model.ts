import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { PaisOrigen } from '../domain/pais-origen.enum';

@Table({ tableName: 'novelas', timestamps: true })
export class NovelaModel extends Model {
  @Column({ type: DataType.STRING(180), allowNull: false })
  titulo!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  sinopsis?: string;

  @Column({ type: DataType.ENUM(...Object.values(PaisOrigen)), allowNull: false })
  paisOrigen!: PaisOrigen;

  @Column({ type: DataType.INTEGER, allowNull: true })
  anioEstreno?: number;
}
