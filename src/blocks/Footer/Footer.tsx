import React, { ReactElement } from "react";
import LogoLink from "../LogoLink/LogoLink";
import { pokeBaseUrl } from "../../constants/urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PokeBall from "../../assets/poke-ball.svg";
import "./Footer.scss";

function Footer(): ReactElement {
  const gitHubRepo: string = "https://github.com/matthewdawson15/pokeviewer-ui";
  const linkedIn: string = "www.linkedin.com/in/mwd15";

  return (
    <footer className="footer">
      <ul className="footer__footer-list">
        <li>
          <LogoLink className="footer__footer-list__logo" />
        </li>
        <div className="footer__footer-list__links-wrapper">
          <li>
            <a href={pokeBaseUrl} target="_blank" rel="noopener noreferrer">
              <img className="icon poke-ball-icon" src={PokeBall} />
              PokéAPI
            </a>
          </li>
          <li>
            <a href={gitHubRepo} target="_blank">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              View Source Code
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
