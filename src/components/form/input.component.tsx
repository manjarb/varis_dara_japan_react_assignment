interface InputProps {
  inputType?: string;
  placeHolder?: string;
  max?: number;
  min?: number;
}

export function Input({ inputType = "text", placeHolder, max, min }: InputProps) {
  const inputClass = "input input-bordered w-full max-w-xs";

  if (inputType === "number") {
    return (
      <input
        type={inputType}
        className={inputClass}
        placeholder={placeHolder}
        max={max}
        min={min}
      />
    );
  }

  return (
    <input type={inputType} className={inputClass} placeholder={placeHolder} />
  );
}
