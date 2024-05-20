import React, { ReactElement } from "react";
import "./Button.scss";
import { ParentClassProps } from "../../types/props";

interface ButtonProps extends ParentClassProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  onClick,
  className = "",
  type = "button",
  disabled = false,
  children,
}: ButtonProps): ReactElement {
  return (
    <div className="button-wrapper">
      <button
        className={`button-wrapper__button ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
