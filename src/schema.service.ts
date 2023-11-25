import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { SchemaData, SchemaRequest, SchemaResponse } from './schema.type';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  putSchema(schemaName: string, schema: SchemaRequest) {
    const filePath =
      this.configService.get('schemaDir') + '/' + schemaName + '.txt';
    writeFileSync(filePath, JSON.stringify(schema), 'utf8');
  }

  getSchema(schemaName: string): SchemaData {
    const filePath =
      this.configService.get('schemaDir') + '/' + schemaName + '.txt';
    if (!existsSync(filePath)) {
      throw new BadRequestException();
    }

    const schemaFile = JSON.parse(readFileSync(filePath, 'utf8')) as SchemaData;
    if (!schemaFile.schema || !schemaFile.mcid) {
      throw new BadRequestException();
    }

    return schemaFile;
  }
}
