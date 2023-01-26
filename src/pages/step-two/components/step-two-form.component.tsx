import { useFormik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";
import { Select } from "../../../components/form/select.component";
import StepFormFooter from "../../../components/form/step-form-footer.component";
import { useRestaurantsData } from "../../../hooks/use-restaurants-data";
import { useStepTwoData } from "../../../hooks/use-step-two-data";

import { FormSuccessProps } from "../../../interfaces/form.interface";

const StepTwoFormSchema = Yup.object().shape({
  restaurant: Yup.string().required("Please Select"),
});

interface StepTwoFormProps extends FormSuccessProps {
  selectedMeal: string;
  onPreviousClick: () => void;
}

export default function StepTwoForm({
  selectedMeal,
  onSuccess,
  onPreviousClick,
}: StepTwoFormProps) {
  const { setStepTwoData } = useStepTwoData();
  const { restaurantsData } = useRestaurantsData();

  const formik = useFormik({
    initialValues: {
      restaurant: "",
    },
    validationSchema: StepTwoFormSchema,
    onSubmit: (values) => {
      console.log(values, " :values");
      setStepTwoData(values);
      onSuccess();
    },
  });

  const restaurantOptions = useMemo(() => {
    return restaurantsData
      .filter((r) => r.availableMeals.includes(selectedMeal))
      .map((r) => ({
        value: r.restaurant,
        label: r.restaurant,
      }));
  }, [selectedMeal, restaurantsData]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="mb-10 text-center">
          <h3 className="mb-5">Please Select a Restaurant</h3>
          <Select
            placeHolder="Select one"
            options={restaurantOptions}
            value={formik.values.restaurant}
            name="restaurant"
            onChange={formik.handleChange}
            error={formik.errors.restaurant}
            touched={formik.touched.restaurant}
          />
        </div>
      </div>
      <StepFormFooter onPreviousClick={onPreviousClick} />
    </form>
  );
}
