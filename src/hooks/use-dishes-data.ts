import { useState } from "react";
import { dishes } from "../data/dishes";

export function useDishesData() {
  const [dishesData, setDishesData] = useState(dishes);

  return {
    dishesData,
    setDishesData,
  };
}
