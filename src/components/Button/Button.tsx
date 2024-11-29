import { Link } from "react-router";
import "./Button.css";

interface ButtonProps {
  text: string;
  className?: string;
  redirection: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, redirection }) => {
  return (
    <Link className={className} to={redirection}>
      {text}
    </Link>
  );
};

export default Button;
