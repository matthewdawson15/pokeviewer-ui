import React from "react";
import { ParentProps } from "../../types/props";
import "./ErrorPage.scss";

const ErrorPage = ({ children }: ParentProps) => (
  <div className="error-page">{children}</div>
);

export default ErrorPage;
