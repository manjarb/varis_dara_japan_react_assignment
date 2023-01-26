export enum MealName {
  Breakfast = "breakfast",
  Lunch = "lunch",
  Dinner = "dinner",
}

export interface Meal {
  title: string;
  value: string;
}

export const meals: Meal[] = [
  {
    title: "Breakfast",
    value: MealName.Breakfast,
  },
  {
    title: "Lunch",
    value: MealName.Lunch,
  },
  {
    title: "Dinner",
    value: MealName.Dinner,
  },
];
