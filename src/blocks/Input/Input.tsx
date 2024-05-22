import React, { ChangeEvent, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Input.scss";

interface InputProps {
  id: string;
  type?: string;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  value?: string;
  icon?: JSX.Element | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  cancelInput: () => void;
}

/**
 * Input block component to generate an input for the user to type into.
 *
 * The component executes a supplied function whenever the user
 * types into the box, and displays
 * the current typed value.
 */
function Input({
  id,
  type = "text",
  label = "",
  wrapperClassName = "",
  labelClassName = "",
  placeholder = "",
  value = "",
  icon = null,
  onChange,
  cancelInput,
}: InputProps): ReactElement {
  return (
    <span className={wrapperClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <span className="text-input-wrapper">
        <input
          id={id}
          className="text-input-wrapper__text-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          onClick={cancelInput}
          disabled={value === "" || value === null || value === undefined}
          className={`text-input-wrapper__input-icon ${
            value ? "text-input-wrapper__clear-icon" : ""
          }`}
        >
          {value ? <FontAwesomeIcon icon={faTimes} /> : icon}
        </button>
      </span>
    </span>
  );
}

export default Input;
