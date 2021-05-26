import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(resolve('./public'))
  app.setGlobalPrefix('api')
  app.enableCors()
  const logger = new Logger()
  await app.listen(4000);
  logger.log('server on port 4000')

}
bootstrap();
