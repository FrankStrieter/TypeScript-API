import { Module } from '@nestjs/common';
import { ArticleModule } from 'articles/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [],
})
export class AppModule {}
