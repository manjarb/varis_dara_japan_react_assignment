import { atom, useAtom } from "jotai";

export interface SelectedDish {
  dishId: string;
  numberOfServing: number;
}

export interface StepThreeData {
  selectedDishes: SelectedDish[];
}

const stepThreeAtom = atom<StepThreeData | null>(null);

export function useStepThreeData() {
  const [stepThreeData, setStepThreeData] = useAtom(stepThreeAtom);

  return {
    stepThreeData,
    setStepThreeData,
  };
}
