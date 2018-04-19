import { Module } from '@nestjs/common';
import { DatabaseProvider } from '../database/database';
import { Drink } from '../models/drink';
import { Dish } from 'models/dish';
import { DishesController } from './dishes/Dishes.controller';
import { DrinksController } from './drinks/drinks.controller';

@Module({
  controllers: [DishesController, DrinksController],
  components: [
    {
      provide: 'DrinksDatabase',
      useFactory: () =>
        new DatabaseProvider<Drink>(`${__dirname}/../db-store/drinks.json`),
    },
    {
      provide: 'DishesDatabase',
      useFactory: () =>
        new DatabaseProvider<Dish>(`${__dirname}/../db-store/dishes.json`),
    },
  ],
})
export class ProductsModule {}
