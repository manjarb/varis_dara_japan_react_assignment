interface Option {
  label: string;
  value: any;
}

interface SelectProps {
  options: Option[];
  placeHolder: string;
  value: any;
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export function Select({ options, placeHolder, value, name, onChange }: SelectProps) {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
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
  );
}
