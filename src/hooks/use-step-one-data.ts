import { atom, useAtom } from "jotai";

export interface StepOneData {
  meal: string;
  people: number;
}

const stepOneAtom = atom<StepOneData | null>(null);

export function useStepOneData() {
  const [stepOneData, setStepOneData] = useAtom(stepOneAtom);

  return {
    stepOneData,
    setStepOneData
  };
}
