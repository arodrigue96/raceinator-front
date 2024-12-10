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
  return linkTo ? (
    <Link
      className={className ? `main-button ${className}` : "main-button"}
      to={linkTo}
    >
      {text}
    </Link>
  ) : (
    <button
      className={className ? `main-button ${className}` : "main-button"}
      disabled={isDisabled}
      type={type ?? "button"}
    >
      {text}
    </button>
  );
};

export default Button;
