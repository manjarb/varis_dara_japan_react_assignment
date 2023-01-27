import { Outlet, useLocation } from "react-router-dom";
import Steps, { Step } from "../components/steps.component";
import { RouterPath } from "../index";

export default function PublicLayout() {
  let location = useLocation();

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
      title: "Review",
    },
  ];

  const getOrderByLocationPath = (path: string) => {
    switch (path) {
      case `/${RouterPath.Review}`:
        return 4;
      case `/${RouterPath.StepThree}`:
        return 3;
      case `/${RouterPath.StepTwo}`:
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="container pt-5 mx-auto pb-15">
      <div className="mb-10 flex justify-center">
        <Steps
          steps={steps}
          currentStep={getOrderByLocationPath(location.pathname)}
        />
      </div>
      <Outlet />
    </div>
  );
}
