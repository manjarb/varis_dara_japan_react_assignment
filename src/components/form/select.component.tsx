interface Option {
  label: string;
  value: any;
}

interface SelectProps {
  options: Option[];
  placeHolder: string;
}

export function Select({ options, placeHolder }: SelectProps) {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
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
