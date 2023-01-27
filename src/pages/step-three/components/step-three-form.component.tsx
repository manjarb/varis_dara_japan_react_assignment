import { getIn, useFormik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";
import Alert from "../../../components/alert.component";

import Button from "../../../components/button.component";
import { Input } from "../../../components/form/input.component";
import { Select } from "../../../components/form/select.component";
import StepFormFooter from "../../../components/form/step-form-footer.component";
import { useDishesData } from "../../../hooks/use-dishes-data";
import { useStepThreeData } from "../../../hooks/use-step-three-data";
import { FormSuccessProps } from "../../../interfaces/form.interface";

Yup.addMethod(Yup.array, "uniqueIn", function (field, message) {
  return this.test("uniqueIn", message, function (array) {
    const uniqueData = Array.from(
      new Set(array?.map((row) => row[field]?.toLowerCase()))
    );
    const isUnique = array?.length === uniqueData.length;
    if (isUnique) {
      return true;
    }
    const index = array?.findIndex((row, i) => {
      return row && uniqueData && row[field]?.toLowerCase() !== uniqueData[i];
    });

    if (
      array &&
      index !== undefined &&
      array[index] &&
      array[index][field] === ""
    ) {
      return true;
    }
    return this.createError({
      path: `${this.path}.${index}.${field}`,
      message,
    });
  });
});

const StepThreeFormSchema = Yup.object().shape({
  selectedDishes: Yup.array()
    .of(
      Yup.object().shape({
        dishId: Yup.string().required("Please Select"),
        numberOfServing: Yup.number()
          .min(1, "Min 1 Serve")
          .max(10, "Max 10 Serve")
          .required("Please Put Amount"),
      })
    )
    // @ts-ignore:
    .uniqueIn(
      "dishId",
      "Please not select the same dish twice, rather add more servings."
    ),
});

interface StepThreeFormProps extends FormSuccessProps {
  selectedRestaurant: string;
  selectedMeal: string;
  amountOfPeople: number;
  onPreviousClick: () => void;
}

export default function StepThreeForm({
  selectedRestaurant,
  selectedMeal,
  amountOfPeople,
  onPreviousClick,
  onSuccess,
}: StepThreeFormProps) {
  const { dishesData } = useDishesData();
  const { setStepThreeData } = useStepThreeData();

  const formik = useFormik({
    initialValues: {
      selectedDishes: [
        {
          dishId: "",
          numberOfServing: 1,
        },
      ],
    },
    validationSchema: StepThreeFormSchema,
    onSubmit: (values) => {
      if (isLackAmount) {
        return;
      }

      setStepThreeData(values);
      onSuccess();
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
    const newValues = formik.values.selectedDishes.slice();
    newValues.push({
      dishId: "",
      numberOfServing: 1,
    });
    formik.setFieldValue("selectedDishes", newValues);
  };

  const deleteOrder = (index: number) => {
    const copyValue = formik.values.selectedDishes.slice();
    copyValue.splice(index, 1);
    formik.setFieldValue("selectedDishes", copyValue);
  };

  const amountOfServing = useMemo(() => {
    return formik.values.selectedDishes.reduce((x, y) => {
      return x + y.numberOfServing;
    }, 0);
  }, [formik.values.selectedDishes]);

  const isLackAmount = useMemo(() => {
    return amountOfServing < amountOfPeople && formik.dirty;
  }, [amountOfServing, amountOfPeople, formik.dirty]);

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
              className="flex mt-[20px] w-[720px]"
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

              <div className="ml-[10px] mr-[5px]">
                <h3 className="mb-5">Please Enter No of Serving</h3>
                <Input
                  min={1}
                  inputType="number"
                  name={servingName}
                  value={value.numberOfServing}
                  onChange={formik.handleChange}
                  error={errorServing}
                  touched={touchServing}
                />
              </div>

              <div className="ml-[5px] mt-[44px] w-[88px]">
                {formik.values.selectedDishes.length > 1 && (
                  <Button
                    onClick={() => deleteOrder(index)}
                    buttonStyle="error"
                    text="Delete"
                  />
                )}
              </div>
            </div>
          );
        })}

        <div className="mt-10">
          <span className="mr-[20px]">Total dishes: {amountOfServing}</span>
          <Button onClick={addNewOrder} buttonStyle="info" text="Add" />
        </div>
      </div>

      {isLackAmount && (
        <div className="w-[720px] pt-[20px] pb-[20px] mx-auto">
          <Alert
            text={`You need to order at least ${amountOfPeople} dishes for ${amountOfPeople} people`}
          />
        </div>
      )}

      <StepFormFooter onPreviousClick={onPreviousClick} />
    </form>
  );
}
