import { Link } from "react-router";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  linkTo?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  linkTo,
  ...props
}) => {
  const buttonClassName = className
    ? `main-button ${className}`
    : "main-button";

  return linkTo ? (
    <Link className={buttonClassName} to={linkTo}>
      {children}
    </Link>
  ) : (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
