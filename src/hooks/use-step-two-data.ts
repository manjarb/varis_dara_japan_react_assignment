import { atom, useAtom } from "jotai";

export interface StepTwoData {
  restaurant: string;
}

const stepTwoAtom = atom<StepTwoData | null>(null);

export function useStepTwoData() {
  const [stepTwoData, setStepTwoData] = useAtom(stepTwoAtom);

  return {
    stepTwoData,
    setStepTwoData,
  };
}
