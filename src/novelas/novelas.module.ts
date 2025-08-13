import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NovelasController } from './interfaces/novelas.controller';
import { NovelasService } from './application/novelas.service';
import { NovelaModel } from './infra/novela.model';
import { NOVELA_REPO } from './domain/novela.repository';
import { NovelaSequelizeRepository } from './infra/novela.sequelize.repository';

@Module({
  imports: [SequelizeModule.forFeature([NovelaModel])],
  controllers: [NovelasController],
  providers: [
    NovelasService,
    { provide: NOVELA_REPO, useClass: NovelaSequelizeRepository },
  ],
})
export class NovelasModule {}
