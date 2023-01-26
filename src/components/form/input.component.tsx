interface InputProps {
  inputType?: string;
  placeHolder?: string;
  max?: number;
  min?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
  name: string;
}

export function Input({
  inputType = "text",
  placeHolder,
  max,
  min,
  value,
  name,
  onChange,
}: InputProps) {
  const inputClass = "input input-bordered w-full max-w-xs";

  if (inputType === "number") {
    return (
      <input
        type={inputType}
        name={name}
        className={inputClass}
        placeholder={placeHolder}
        max={max}
        min={min}
        onChange={onChange}
        value={value}
      />
    );
  }

  return (
    <input
      type={inputType}
      name={name}
      className={inputClass}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
}
