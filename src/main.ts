import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log('start at port:' + 13004);
  await app.listen(13004);
}
bootstrap();
