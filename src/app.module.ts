import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import config from './configuration';
import { AppService } from './schema.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
