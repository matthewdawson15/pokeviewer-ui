import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../blocks/Icon/Icon";

/**
 * Not Found Page component with return to home button
 */
function NotFoundPage(): ReactElement {
  return (
    <div className="centred">
      <h1>Error 404 - Page not found</h1>
      <p>Sorry, this page URL doesn't exist.</p>
      <div className="button-wrapper">
        <Link className="button-wrapper__button" to="/">
          <>
            <Icon icon={faLongArrowLeft} />
            <span>Return to PokéViewer</span>
          </>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
