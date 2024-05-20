import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import title from "../../assets/title.png";
import { OptionalClassProps } from "../../types/props";

function LogoLink({ className = "" }: OptionalClassProps): ReactElement {
  return (
    <Link className="logo-link" to="/">
      <img className={className} src={title} alt="'PokeViewer' webpage title" />
    </Link>
  );
}

export default LogoLink;
