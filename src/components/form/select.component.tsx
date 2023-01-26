interface Option {
  label: string;
  value: any;
}

interface SelectProps {
  options: Option[];
  placeHolder: string;
  value: any;
  name: string;
  error?: string;
  touched?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export function Select({
  options,
  placeHolder,
  value,
  name,
  error,
  touched,
  onChange,
}: SelectProps) {
  return (
    <div>
      <select
        className={`select select-bordered w-full max-w-xs ${
          error ? "select-error" : ""
        }`}
        value={value}
        name={name}
        onChange={onChange}
      >
        <option disabled value={""}>
          {placeHolder}
        </option>
        {options.map(({ label, value }, index) => (
          <option key={`option-${value}-${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>

      {error && touched ? <div className="mt-3">{error}</div> : null}
    </div>
  );
}
