import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './schema.service';
import { SchemaResponse } from './schema.type';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get('/schema/:schema')
  getSchema(
    @Query('id') id: string,
    @Query('pw') pw: string,
    @Param('schema') schema: string,
  ): SchemaResponse {
    Logger.log('access getSchema:' + schema);
    if (
      id !== this.configService.getOrThrow('id') ||
      pw !== this.configService.getOrThrow('pw')
    ) {
      throw new BadRequestException();
    }

    return this.appService.getSchema(schema);
  }

  @Get('/')
  health() {
    Logger.log('access health:');
    return 'ok';
  }

  @Post('/schema/:schema')
  setSchema(@Param('schema') schema: string, @Body() schemaData) {
    Logger.log('access setSchema:' + schema);
    this.appService.putSchema(schema, schemaData);
  }
}
