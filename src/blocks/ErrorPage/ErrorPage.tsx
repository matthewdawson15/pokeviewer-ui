import React from "react";
import { ParentProps } from "../../types/components";
import "./ErrorPage.scss";

const ErrorPage = ({ className = "", children }: ParentProps) => (
  <div className={`error-page ${className}`}>{children}</div>
);

export default ErrorPage;
