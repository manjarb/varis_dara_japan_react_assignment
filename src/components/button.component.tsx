interface ButtonProps {
  text: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonStyle?: "success" | "warning";
}

export default function Button({
  text,
  buttonType = "button",
  buttonStyle = "success",
}: ButtonProps) {
  const getButtonClass = (buttonStyle: string) => {
    switch (buttonStyle) {
      case "success":
        return "btn-success";
      case "warning":
        return "btn-warning";
      default:
        break;
    }
  };

  return (
    <button type={buttonType} className={`btn ${getButtonClass(buttonStyle)}`}>
      {text}
    </button>
  );
}