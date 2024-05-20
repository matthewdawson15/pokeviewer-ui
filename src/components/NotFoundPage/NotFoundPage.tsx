import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage(): ReactElement {
  /******* */
  // ===================================
  // ===================================
  // ===================================

  // STYLE THIS LINK WITH BUTTON STYLING

  // ===================================
  // ===================================
  /******* */
  return (
    <div className="error-page">
      <h1>Error 404 - Page not found</h1>
      <p>Sorry, this page URL doesn't exist.</p>
      <Link to="/">
        <FontAwesomeIcon icon={faLongArrowLeft} />
        Return to Pokémon list
      </Link>
    </div>
  );
}

export default NotFoundPage;
