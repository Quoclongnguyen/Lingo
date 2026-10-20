import type { INestApplication } from '@nestjs/common';

export function configureApp(app: INestApplication): void {
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: process.env.WEB_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  });
}
