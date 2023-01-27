import { useNavigate } from "react-router-dom";
import { RouterPath } from "../..";
import { useStepOneData } from "../../hooks/use-step-one-data";
import StepOneForm from "./components/step-one-form.component";

export default function StepOnePage() {
  const { stepOneData } = useStepOneData();
  const navigate = useNavigate();

  const onStepOneSuccess = () => {
    navigate(`/${RouterPath.StepTwo}`);
  };

  return (
    <div className="pb-[30px]">
      <StepOneForm stepOneData={stepOneData} onSuccess={onStepOneSuccess} />
    </div>
  );
}
