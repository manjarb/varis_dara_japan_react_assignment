interface InputProps {
  inputType?: string;
  placeHolder?: string;
  max?: number;
  min?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
  name: string;
  error?: string;
  touched?: boolean;
  className?: string;
}

export function Input({
  inputType = "text",
  placeHolder,
  max,
  min,
  value,
  name,
  error,
  touched,
  className = "",
  onChange,
}: InputProps) {
  const inputClass = "input input-bordered";

  if (inputType === "number") {
    return (
      <div>
        <input
          type={inputType}
          name={name}
          className={`${inputClass} ${className} ${error ? 'input-error' : ''}`}
          placeholder={placeHolder}
          max={max}
          min={min}
          onChange={onChange}
          value={value}
        />

        {error && touched ? <div className="mt-3">{error}</div> : null}
      </div>
    );
  }

  return (
    <div>
      <input
        type={inputType}
        name={name}
        className={`${inputClass} ${className} ${error ? "input-error" : ""}`}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
      {error && touched ? <div className="mt-3">{error}</div> : null}
    </div>
  );
}
