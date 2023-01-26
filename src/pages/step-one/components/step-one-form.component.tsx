import { Input } from "../../../components/form/input.component";
import { Select } from "../../../components/form/select.component";

export default function StepOneForm() {
  return (
    <form>
      <div className="flex flex-col items-center">
        <div className="mb-10">
          <h3 className="mb-5">Please Select a meal</h3>
          <Select />
        </div>

        <div>
          <h3 className="mb-5">Please Enter Number of people</h3>
          <Input inputType="number" />
        </div>
      </div>
    </form>
  );
}
