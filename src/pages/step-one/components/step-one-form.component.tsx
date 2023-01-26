import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../components/buttom.component";
import { Input } from "../../../components/form/input.component";
import { Select } from "../../../components/form/select.component";
import { meals } from "../../../data/meals";
import { useStepOneData } from "../../../hooks/use-step-one-data";

const StepOneFormSchema = Yup.object().shape({
  meal: Yup.string().required("Required"),
  people: Yup.number()
    .min(1, "Min 1 Person")
    .max(10, "Max 10 People")
    .required("Required"),
});

export default function StepOneForm() {
  const { setStepOneData } = useStepOneData();
  const formik = useFormik({
    initialValues: {
      meal: "",
      people: 0,
    },
    validationSchema: StepOneFormSchema,
    onSubmit: (values) => {
      setStepOneData(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="mb-10 text-center">
          <h3 className="mb-5">Please Select a meal</h3>
          <Select
            placeHolder="Select one"
            options={meals.map((m) => ({ value: m.value, label: m.title }))}
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

        <Button buttonType="submit" text="Next" />
      </div>
    </form>
  );
}
