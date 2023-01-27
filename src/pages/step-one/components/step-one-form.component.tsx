import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import * as Yup from "yup";

import { Input } from "../../../components/form/input.component";
import { Select } from "../../../components/form/select.component";
import StepFormFooter from "../../../components/form/step-form-footer.component";
import { meals } from "../../../data/meals";
import { StepOneData, useStepOneData } from "../../../hooks/use-step-one-data";
import { FormSuccessProps } from "../../../interfaces/form.interface";

const StepOneFormSchema = Yup.object().shape({
  meal: Yup.string().required("Please Select"),
  people: Yup.number()
    .min(1, "Min 1 Person")
    .max(10, "Max 10 People")
    .required("Please Put number of People"),
});

interface StepOneFormProps extends FormSuccessProps {
  stepOneData: StepOneData | null;
}

export default function StepOneForm({
  stepOneData,
  onSuccess,
}: StepOneFormProps) {
  const { setStepOneData } = useStepOneData();
  const formik = useFormik({
    initialValues: {
      meal: "",
      people: 0,
    },
    validationSchema: StepOneFormSchema,
    onSubmit: (values) => {
      setStepOneData(values);
      onSuccess();
    },
  });

  useEffect(() => {
    if (stepOneData) {
      formik.setValues(stepOneData);
    }
  }, [stepOneData]);

  const mealOptions = useMemo(
    () => meals.map((m) => ({ value: m.value, label: m.title })),
    []
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="mb-10 text-center">
          <h3 className="mb-5">Please Select a meal</h3>
          <Select
            placeHolder="Select one"
            options={mealOptions}
            value={formik.values.meal}
            name="meal"
            onChange={formik.handleChange}
            error={formik.errors.meal}
            touched={formik.touched.meal}
          />
        </div>

        <h3 className="mb-5">Please Enter Number of people</h3>
        <div className="mb-6 text-center">
          <Input
            inputType="number"
            name="people"
            value={formik.values.people}
            onChange={formik.handleChange}
            error={formik.errors.people}
            touched={formik.touched.people}
          />
        </div>
      </div>

      <StepFormFooter isShowPrevious={false} />
    </form>
  );
}
