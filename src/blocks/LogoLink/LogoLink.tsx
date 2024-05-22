import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import title from "../../assets/title.png";
import { OptionalClassProps } from "../../types/props";

/**
 * Block component to render a react-router Link with the webpage's logo/title/header image inside
 */
function LogoLink({ className = "" }: OptionalClassProps): ReactElement {
  return (
    <Link className="logo-link" to="/">
      <img className={className} src={title} alt="'PokeViewer' webpage title" />
    </Link>
  );
}

export default LogoLink;
