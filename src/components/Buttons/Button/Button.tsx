import "../Buttons.css";

interface ButtonProps {
  text: string;
  color: "red" | "grey";
  className?: string;
  type?: "submit" | "reset";
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  color,
  isDisabled,
  type,
}) => {
  const redColor = "#C80502";
  const greyColor = "#424242";

  return (
    <button
      className={className ? `main-button ${className}` : "main-button"}
      style={{
        backgroundColor: color === "grey" ? greyColor : redColor,
      }}
      disabled={isDisabled}
      type={type ?? "button"}
    >
      {text}
    </button>
  );
};

export default Button;
