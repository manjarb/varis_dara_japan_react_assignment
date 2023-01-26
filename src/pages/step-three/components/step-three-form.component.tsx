import { getIn, useFormik } from "formik";
import { useMemo } from "react";
import Button from "../../../components/button.component";
import { Input } from "../../../components/form/input.component";
import { Select } from "../../../components/form/select.component";
import StepFormFooter from "../../../components/form/step-form-footer.component";
import { useDishesData } from "../../../hooks/use-dishes-data";
import { FormSuccessProps } from "../../../interfaces/form.interface";

interface StepThreeFormProps extends FormSuccessProps {
  selectedRestaurant: string;
  selectedMeal: string;
  amountOfPeople: number;
  onPreviousClick: () => void;
}

export default function StepThreeForm({
  selectedRestaurant,
  selectedMeal,
}: StepThreeFormProps) {
  const { dishesData } = useDishesData();

  const formik = useFormik({
    initialValues: {
      selectedDishes: [
        {
          dishId: "",
          numberOfServing: 0,
        },
      ],
    },
    // validationSchema: StepTwoFormSchema,
    onSubmit: (values) => {
      console.log(values, " :values");
      // setStepTwoData(values);
      // onSuccess();
    },
  });

  const dishOptions = useMemo(() => {
    return dishesData
      .filter(
        (d) =>
          d.restaurant === selectedRestaurant &&
          d.availableMeals.includes(selectedMeal)
      )
      .map((r) => ({
        value: r.id,
        label: r.name,
      }));
  }, [selectedRestaurant, dishesData, selectedMeal]);

  const addNewOrder = () => {
    const newValues = formik.values.selectedDishes;
    newValues.push({
      dishId: "",
      numberOfServing: 0,
    });
    formik.setFieldValue("selectedDishes", newValues);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center">
        {formik.values.selectedDishes.map((value, index) => {
          const selectName = `selectedDishes[${index}].dishId`;
          const servingName = `selectedDishes[${index}].numberOfServing`;

          const errorDishId = getIn(formik.errors, selectName);
          const touchDishId = getIn(formik.touched, selectName);
          const errorServing = getIn(formik.errors, servingName);
          const touchServing = getIn(formik.touched, servingName);

          return (
            <div
              key={`selectedDishes-option-${index}`}
              className="flex mt-[20px]"
            >
              <div className="flex-auto mr-[10px]">
                <h3 className="mb-5">Please Select a Dish</h3>
                <Select
                  placeHolder="Select one"
                  options={dishOptions}
                  value={value.dishId}
                  name={selectName}
                  onChange={formik.handleChange}
                  error={errorDishId}
                  touched={touchDishId}
                />
              </div>

              <div className="flex-auto ml-[10px]">
                <h3 className="mb-5">Please Enter No of Serving</h3>
                <Input
                  inputType="number"
                  name={servingName}
                  value={value.numberOfServing}
                  onChange={formik.handleChange}
                  error={errorServing}
                  touched={touchServing}
                />
              </div>
            </div>
          );
        })}

        <div className="mt-10">
          <Button onClick={addNewOrder} text="Add" />
        </div>
      </div>

      <StepFormFooter />
    </form>
  );
}
