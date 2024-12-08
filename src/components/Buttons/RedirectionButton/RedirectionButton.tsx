import { Link } from "react-router";
import "../Buttons.css";

interface RedirectionButtonProps {
  text: string;
  className?: string;
  redirection: string;
  ariaLabel: string;
  buttonColor: "red" | "grey";
}

const RedirectionButton: React.FC<RedirectionButtonProps> = ({
  text,
  className,
  redirection,
  ariaLabel,
  buttonColor,
}) => {
  const greyColor = "#424242";
  const redColor = "#C80502";

  return (
    <Link
      className={className ? `main-button ${className}` : "main-button"}
      to={redirection}
      aria-label={ariaLabel}
      style={{
        backgroundColor: buttonColor === "grey" ? greyColor : redColor,
      }}
    >
      {text}
    </Link>
  );
};

export default RedirectionButton;
