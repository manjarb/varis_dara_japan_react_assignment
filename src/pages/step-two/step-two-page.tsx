import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../..";
import { useStepOneData } from "../../hooks/use-step-one-data";
import { useStepTwoData } from "../../hooks/use-step-two-data";
import StepTwoForm from "./components/step-two-form.component";

export default function StepTwoPage() {
  const { stepOneData } = useStepOneData();
  const { stepTwoData } = useStepTwoData();
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
    <div className="pb-[30px]">
      {stepOneData?.meal && (
        <StepTwoForm
          stepTwoData={stepTwoData}
          onSuccess={onStepTwoSuccess}
          selectedMeal={stepOneData.meal}
          onPreviousClick={onPreviousStep}
        />
      )}
    </div>
  );
}
