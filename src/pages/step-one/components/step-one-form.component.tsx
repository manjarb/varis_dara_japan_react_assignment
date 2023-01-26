import { useFormik } from "formik";
import Button from "../../../components/buttom.component";
import { Input } from "../../../components/form/input.component";
import { Select } from "../../../components/form/select.component";
import { meals } from "../../../data/meals";

export default function StepOneForm() {
  const formik = useFormik({
    initialValues: {
      meal: '',
      people: 0
    },
    onSubmit: (values) => {
      console.log(values, " :values");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="mb-10">
          <h3 className="mb-5">Please Select a meal</h3>
          <Select
            placeHolder="Select one"
            options={meals.map((m) => ({ value: m.value, label: m.title }))}
            value={formik.values.meal}
            name="meal"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-6">
          <h3 className="mb-5">Please Enter Number of people</h3>
          <Input
            inputType="number"
            max={10}
            min={1}
            name="people"
            value={formik.values.people}
            onChange={formik.handleChange}
          />
        </div>

        <Button buttonType="submit" text="Next" />
      </div>
    </form>
  );
}
