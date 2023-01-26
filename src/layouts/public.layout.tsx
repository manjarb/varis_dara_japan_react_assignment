import { Outlet } from "react-router-dom";
import Steps, { Step } from "../components/steps.component";

export default function PublicLayout() {
  const steps: Step[] = [
    {
      order: 1,
      title: "Step 1",
    },
    {
      order: 2,
      title: "Step 2",
    },
    {
      order: 3,
      title: "Step 3",
    },
    {
      order: 4,
      title: "Step 4",
    },
  ];

  return (
    <div className="container py-5 mx-auto">
      <div className="mb-10 flex justify-center">
        <Steps steps={steps} currentStep={1} />
      </div>
      <Outlet />
    </div>
  );
}
