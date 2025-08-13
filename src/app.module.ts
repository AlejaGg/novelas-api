import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './config/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ThrottlerModule } from '@nestjs/throttler';
import { NovelasModule } from './novelas/novelas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [dbConfig] }),
    ThrottlerModule.forRoot([{ ttl: 60, limit: 100 }]),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        dialect: 'mysql',
        host: cfg.get('db.host'),
        port: cfg.get('db.port'),
        username: cfg.get('db.username'),
        password: cfg.get('db.password'),
        database: cfg.get('db.database'),
        autoLoadModels: true,
        synchronize: true, // SOLO en desarrollo. En producción usa migraciones.
        logging: false,
      }),
    }),
    NovelasModule,
  ],
})
export class AppModule {}
