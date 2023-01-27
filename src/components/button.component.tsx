interface ButtonProps {
  text: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonStyle?: "success" | "warning" | "info" | "error";
  onClick?: () => void;
}

export default function Button({
  text,
  buttonType = "button",
  buttonStyle = "success",
  onClick = () => {},
}: ButtonProps) {
  const getButtonClass = (buttonStyle: string) => {
    switch (buttonStyle) {
      case "success":
        return "btn-success";
      case "warning":
        return "btn-warning";
      case "info":
        return "btn-info";
      case "error":
        return "btn-error";
      default:
        break;
    }
  };

  return (
    <button
      type={buttonType}
      className={`btn ${getButtonClass(buttonStyle)}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
