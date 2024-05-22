import React, { ReactElement } from "react";
import LogoLink from "../../LogoLink/LogoLink";
import "./Header.scss";

/**
 * Header block component featuring the webpage's logo/title/header image
 */
function Header(): ReactElement {
  return (
    <header className="header">
      <LogoLink className="header__logo" />
    </header>
  );
}

export default Header;
