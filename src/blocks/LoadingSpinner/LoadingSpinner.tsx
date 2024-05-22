import React from "react";
import "./LoadingSpinner.scss";
import { OptionalClassProps } from "../../types/props";
import Icon from "../Icon/Icon";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

interface LoadingSpinnerProps extends OptionalClassProps {
  height?: number;
  text?: string;
}

/**
 * Block component to render a spinning loading spinner with
 * optional text and classname
 */
const LoadingSpinner = ({
  className = "",
  height,
  text = "",
}: LoadingSpinnerProps) => (
  <div
    className="loading-spinner-container"
    style={height ? { height: `${height}px` } : {}}
  >
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
