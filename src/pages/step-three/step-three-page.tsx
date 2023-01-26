import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../..";
import { useStepOneData } from "../../hooks/use-step-one-data";
import { useStepTwoData } from "../../hooks/use-step-two-data";
import StepThreeForm from "./components/step-three-form.component";

export default function StepThreePage() {
  const { stepOneData } = useStepOneData();
  const { stepTwoData } = useStepTwoData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stepOneData?.meal || !stepTwoData?.restaurant) {
      navigate("/");
    }
  }, [stepOneData?.meal, navigate, stepTwoData?.restaurant]);

  const onPreviousStep = () => {
    navigate(`/${RouterPath.StepTwo}`);
  };

  return (
    <div>
      {stepOneData?.meal && stepTwoData?.restaurant && (
        <StepThreeForm
          selectedMeal={stepOneData.meal}
          selectedRestaurant={stepTwoData.restaurant}
          amountOfPeople={stepOneData.people}
          onPreviousClick={onPreviousStep}
          onSuccess={() => {}}
        />
      )}
    </div>
  );
}