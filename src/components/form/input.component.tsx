interface InputProps {
  inputType?: string;
  placeHolder?: string;
}

export function Input({ inputType = "text", placeHolder }: InputProps) {
  return (
    <input
      type={inputType}
      className="input input-bordered w-full max-w-xs"
      placeholder={placeHolder}
    />
  );
}
