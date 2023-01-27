import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../..";
import StepFormFooter from "../../components/form/step-form-footer.component";
import { useDishesData } from "../../hooks/use-dishes-data";
import { useStepOneData } from "../../hooks/use-step-one-data";
import { useStepThreeData } from "../../hooks/use-step-three-data";
import { useStepTwoData } from "../../hooks/use-step-two-data";

export default function ReviewPage() {
  const { stepOneData } = useStepOneData();
  const { stepTwoData } = useStepTwoData();
  const { stepThreeData } = useStepThreeData();
  const { dishesData } = useDishesData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stepOneData || !stepTwoData || !stepThreeData) {
      navigate("/");
    }
  }, [stepOneData, stepTwoData, stepThreeData, navigate]);

  const getDishName = useCallback(
    (dishId: string) => {
      return dishesData.find((d) => d.id === parseInt(dishId));
    },
    [dishesData]
  );

  const onPreviousStep = () => {
    navigate(`/${RouterPath.StepThree}`);
  };

  const onSubmit = () => {
    console.log("Order Summary: ", {
      ...stepOneData,
      ...stepTwoData,
      ...stepThreeData
    });
  }

  return (
    <div className="mt-[20px] w-[780px] mx-auto pb-[40px]">
      <div className="flex mb-[30px]">
        <p className="w-[50%]">Meal</p>
        <p className="w-[50%]">{stepOneData?.meal}</p>
      </div>
      <div className="flex mb-[30px]">
        <p className="w-[50%]">No of people</p>
        <p className="w-[50%]">{stepOneData?.people}</p>
      </div>
      <div className="flex mb-[30px]">
        <p className="w-[50%]">Restaurant</p>
        <p className="w-[50%]">{stepTwoData?.restaurant}</p>
      </div>

      <div className="flex mb-[30px]">
        <div className="w-[50%]">
          <p>Dishes</p>
        </div>

        <div className="w-[50%]">
          {stepThreeData?.selectedDishes.map((dish, index) => (
            <div key={`${dish.dishId}-${index}`} className="flex">
              <div className="w-[50%] mr-[15px]">
                {getDishName(dish.dishId)?.name}
              </div>
              <div className="w-[50%]">{dish.numberOfServing}</div>
            </div>
          ))}
        </div>
      </div>

      <StepFormFooter
        onPreviousClick={onPreviousStep}
        nextButtonText="Submit"
        nextButtonType="button"
        onNextButtonClick={onSubmit}
      />
    </div>
  );
}
