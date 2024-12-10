import { Link } from "react-router";
import "./Button.css";

interface ButtonProps {
  text: string;
  linkTo?: string;
  className?: string;
  type?: "submit" | "reset";
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  isDisabled,
  type,
  linkTo,
}) => {
  const buttonClassName = className
    ? `main-button ${className}`
    : "main-button";

  return linkTo ? (
    <Link className={buttonClassName} to={linkTo}>
      {text}
    </Link>
  ) : (
    <button
      className={buttonClassName}
      disabled={isDisabled}
      type={type ?? "button"}
    >
      {text}
    </button>
  );
};

export default Button;
