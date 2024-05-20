import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { OptionalClassProps } from "../../types/props";
import "./Icon.scss";

interface IconProps extends OptionalClassProps {
  icon: IconDefinition;
}

/**
 * Component to apply default and optional classname to fontawesome
 * icon and render the icon corresponding to the supplied IconDefinition
 *
 * @param icon the IconDefinition of the fontawesome icon to render
 * @returns Icon react element
 */
function Icon({ className, icon }: IconProps): ReactElement {
  return <FontAwesomeIcon className={`icon ${className}`} icon={icon} />;
}

export default Icon;
