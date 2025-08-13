import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet()); // cabeceras de seguridad
  app.enableCors({ origin: true, credentials: true });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // solo permitimos campos del DTO
    forbidNonWhitelisted: true, // si mandan algo extra: error
    transform: true,            // convierte "2020" a número si hace falta
  }));

 

  const port = parseInt(process.env.PORT ?? '3000', 10);
  await app.listen(port);
  console.log(`✅ API escuchando en http://localhost:${port}`);
}
bootstrap();
