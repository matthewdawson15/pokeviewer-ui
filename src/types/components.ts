import { ReactElement } from "react";

export type OptionalClassProps = {
  className?: string;
};

export interface ParentProps extends OptionalClassProps {
  children: ReactElement;
}
