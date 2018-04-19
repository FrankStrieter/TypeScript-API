import { Get, Param, Post, Delete } from '@nestjs/common';
import { DatabaseProvider } from 'database/database';
import { Dish } from 'models/dish';
import { Drink } from '../models/drink';

export abstract class CrudController<T> {
  constructor(private database: DatabaseProvider<T>) {}

  @Get()
  all() {
    return this.database.all();
  }

  @Get(':guid')
  single(@Param() params) {
    return this.database.single(params.guid);
  }

  @Post(':guid')
  create(@Param() params) {
    return this.database.upsert(params.guid);
  }

  @Delete(':guid')
  delete(@Param() params) {
    return this.database.delete(params.guid);
  }
}
