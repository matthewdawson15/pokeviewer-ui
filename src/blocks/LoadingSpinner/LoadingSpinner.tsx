import React from "react";
import "./LoadingSpinner.scss";
import { OptionalClassProps } from "../../types/components";
import Icon from "../Icon/Icon";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

interface LoadingSpinnerProps extends OptionalClassProps {
  height?: number;
  text?: string;
}

const LoadingSpinner = ({
  className = "",
  height = 600,
  text = "",
}: LoadingSpinnerProps) => (
  <div className="loading-spinner-container" style={{ height: `${height}px` }}>
    <Icon
      className={`loading-spinner-container__loading-spinner ${className}`}
      icon={faSyncAlt}
    />
    {text && (
      <span className="loading-spinner-container__loading-spinner-text">
        {text}
      </span>
    )}
  </div>
);

export default LoadingSpinner;
