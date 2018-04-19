import { Article } from './article';
import { AVAILABLE_SIZES } from './available-sizes.enum';

export class Dish extends Article {
  constructor(name: string, price: number, public size?: AVAILABLE_SIZES) {
    super(name, price);
    if (!size) {
      this.size = AVAILABLE_SIZES.MEDIUM;
    }
  }
}
