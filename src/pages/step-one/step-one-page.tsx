import { useNavigate } from "react-router-dom";
import { RouterPath } from "../..";
import StepOneForm from "./components/step-one-form.component";

export default function StepOnePage() {
  const navigate = useNavigate();

  const onStepOneSuccess = () => {
    navigate(`/${RouterPath.StepTwo}`);
  }

  return (
    <div className="pb-[30px]">
      <StepOneForm onSuccess={onStepOneSuccess} />
    </div>
  );
}
