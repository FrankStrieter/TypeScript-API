import { Article } from './article';

export class Drink extends Article {
  constructor(
    public name: string,
    public price: number,
    public volume: string,
  ) {
    super(name, price);
  }
}
