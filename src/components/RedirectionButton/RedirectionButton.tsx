import { Link } from "react-router";
import "./RedirectionButton.css";

interface RedirectionButtonProps {
  text: string;
  className?: string;
  redirection: string;
}

const RedirectionButton: React.FC<RedirectionButtonProps> = ({
  text,
  className,
  redirection,
}) => {
  return (
    <Link className={className} to={redirection}>
      {text}
    </Link>
  );
};

export default RedirectionButton;
