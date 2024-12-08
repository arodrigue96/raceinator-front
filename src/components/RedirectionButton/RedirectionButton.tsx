import { Link } from "react-router";
import "./RedirectionButton.css";

interface RedirectionButtonProps {
  text: string;
  className?: string;
  redirection: string;
  ariaLabel: string;
}

const RedirectionButton: React.FC<RedirectionButtonProps> = ({
  text,
  className,
  redirection,
  ariaLabel,
}) => {
  return (
    <Link className={className} to={redirection} aria-label={ariaLabel}>
      {text}
    </Link>
  );
};

export default RedirectionButton;
