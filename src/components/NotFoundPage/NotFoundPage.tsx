import React, { ReactElement } from "react";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ErrorPage from "../../blocks/ErrorPage/ErrorPage";

function NotFoundPage(): ReactElement {
  return (
    <ErrorPage>
      <>
        <h1>Error 404 - Page not found</h1>
        <p>Sorry, this page URL doesn't exist.</p>
        <Link to="/">
          <FontAwesomeIcon icon={faLongArrowLeft} />
          Return to Pokémon list
        </Link>
      </>
    </ErrorPage>
  );
}

export default NotFoundPage;
