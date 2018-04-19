import { Controller, Get, Inject, Param } from '@nestjs/common';
import { DatabaseProvider } from '../../database/database';
import { CrudController } from '../../core/crud.controller';

@Controller('v1/dishes')
export class DishesController<T> extends CrudController<T> {
  constructor(@Inject('DishesDatabase') database: DatabaseProvider<T>) {
    super(database);
  }
}
