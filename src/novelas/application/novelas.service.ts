import { Inject, Injectable } from '@nestjs/common';
import { NOVELA_REPO } from '../domain/novela.repository';
import type { NovelaRepository } from '../domain/novela.repository'; // 👈 clave

import { CreateNovelaDto } from '../interfaces/dto/create-novela.dto';

@Injectable()
export class NovelasService {
  constructor(@Inject(NOVELA_REPO) private readonly repo: NovelaRepository) {}

  create(dto: CreateNovelaDto) {
    return this.repo.create(dto);
  }

  list() {
    return this.repo.findAll();
  }

  get(id: number) {
    return this.repo.findById(id);
  }
}
