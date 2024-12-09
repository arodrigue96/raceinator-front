import "../Buttons.css";

interface ButtonProps {
  text: string;
  color: "red" | "grey";
  className?: string;
  type?: "submit" | "reset";
  isDisabled?: boolean;
  ariaLabel: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  ariaLabel,
  color,
  isDisabled,
  type,
}) => {
  const redColor = "#C80502";
  const greyColor = "#424242";

  return (
    <button
      className={className ? `main-button ${className}` : "main-button"}
      aria-label={ariaLabel}
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
