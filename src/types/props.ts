import { ReactElement } from "react";

export type OptionalClassProps = {
  className?: string;
};

export type ParentProps = {
  children: ReactElement;
};

export type ParentClassProps = OptionalClassProps & ParentProps;
