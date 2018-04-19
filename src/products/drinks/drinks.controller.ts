import { Controller, Get, Inject, Param } from '@nestjs/common';
import { DatabaseProvider } from '../../database/database';
import { CrudController } from '../../core/crud.controller';

@Controller('v1/drinks')
export class DrinksController<T> extends CrudController<T> {
  constructor(@Inject('DrinksDatabase') database: DatabaseProvider<T>) {
    super(database);
  }
}
