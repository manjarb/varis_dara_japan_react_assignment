import { useState } from "react";
import { Dish, dishes } from "../data/dishes";

function getRestaurantsFromDishes(dishes: Dish[]) {
  const result: Dish[] = [];
  dishes.forEach(({ restaurant, id, name, availableMeals }) => {
    const isExisted = result.some((x) => x.restaurant === restaurant);
    if (!isExisted) {
      result.push({ id, name, restaurant, availableMeals });
    }
  });

  return result;
}

export function useRestaurantsData() {
  const [restaurantsData, setRestaurantsData] = useState(
    getRestaurantsFromDishes(dishes)
  );

  return {
    restaurantsData,
    setRestaurantsData,
  };
}
