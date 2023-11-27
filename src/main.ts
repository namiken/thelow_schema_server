import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log('start at port:' + 3001);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
