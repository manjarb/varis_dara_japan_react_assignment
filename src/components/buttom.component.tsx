interface ButtonProps {
  text: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ text, buttonType = "button" }: ButtonProps) {
  return (
    <button type={buttonType} className="btn">
      {text}
    </button>
  );
}
