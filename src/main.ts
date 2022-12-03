import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CatsModule } from './cats/cats.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const catDocument = SwaggerModule.createDocument(app, options, {
    include: [CatsModule],
  });
  SwaggerModule.setup('api/cats', app, catDocument);

  const secondOptions = new DocumentBuilder()
    .setTitle('Broken example')
    .setDescription('The cats API with missing enum')
    .setVersion('1.0')
    .addTag('broken')
    .build();

  const document = SwaggerModule.createDocument(app, secondOptions, {
    include: [CatsModule],
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
