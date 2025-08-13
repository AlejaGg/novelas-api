import { Controller, Get, Post, Body } from '@nestjs/common';
import { NovelasService } from '../application/novelas.service';
import { CreateNovelaDto } from './dto/create-novela.dto';

@Controller('novelas')
export class NovelasController {
  constructor(private readonly service: NovelasService) {}

  @Post()
  create(@Body() dto: CreateNovelaDto) {
    // Controller = solo entrada/salida. La magia va en el service.
    return this.service.create(dto);
  }

  @Get()
  list() {
    return this.service.list();
  }
}
