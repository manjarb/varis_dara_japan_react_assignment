import Dishes from './dishes.json';

export interface Dish {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

export const dishes: Dish[] = Dishes.dishes;
