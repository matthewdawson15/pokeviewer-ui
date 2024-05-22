import React, { ReactElement } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import LogoLink from "../../LogoLink/LogoLink";
import Icon from "../../Icon/Icon";
import { POKE_BASE_URL } from "../../../constants/urls";
import "./Footer.scss";

/**
 * Footer block component rendering a logo link and links to the poke api and the app's source code
 */
function Footer(): ReactElement {
  const gitHubRepo: string = "https://github.com/matthewdawson15/pokeviewer-ui";

  return (
    <footer className="footer">
      <ul className="footer__footer-list">
        <li>
          <LogoLink className="footer__footer-list__logo" />
        </li>
        <div className="footer__footer-list__links-wrapper">
          <li>
            <a
              className="footer__footer-list__links-wrapper__link"
              href={POKE_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={faGlobe} />
              PokéAPI
            </a>
          </li>
          <li>
            <a
              className="footer__footer-list__links-wrapper__link"
              href={gitHubRepo}
              target="_blank"
            >
              <Icon icon={faGithub} />
              View Source Code
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
