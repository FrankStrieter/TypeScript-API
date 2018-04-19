import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from 'articles/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [AppController],
})
export class AppModule {}
