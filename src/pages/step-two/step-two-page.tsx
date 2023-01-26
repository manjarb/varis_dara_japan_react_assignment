import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../..";
import { useStepOneData } from "../../hooks/use-step-one-data";
import StepTwoForm from "./components/step-two-form.component";

export default function StepTwoPage() {
  const { stepOneData } = useStepOneData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stepOneData?.meal) {
      navigate("/");
    }
  }, [stepOneData, navigate]);

  const onStepTwoSuccess = () => {
    navigate(`/${RouterPath.StepThree}`);
  };

  const onPreviousStep = () => {
    navigate("/");
  };

  return (
    <div>
      {stepOneData?.meal && (
        <StepTwoForm
          onSuccess={onStepTwoSuccess}
          selectedMeal={stepOneData.meal}
          onPreviousClick={onPreviousStep}
        />
      )}
    </div>
  );
}
