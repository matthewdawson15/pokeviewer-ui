import React, { ReactElement } from "react";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../blocks/Button/Button";
import Icon from "../../blocks/Icon/Icon";

/**
 * Not Found Page component with return to home button
 */
function NotFoundPage(): ReactElement {
  return (
    <div className="centred">
      <h1>Error 404 - Page not found</h1>
      <p>Sorry, this page URL doesn't exist.</p>
      <Button onClick={(): void => location.assign("/")}>
        <>
          <Icon icon={faLongArrowLeft} />
          <span>Return to PokéViewer</span>
        </>
      </Button>
    </div>
  );
}

export default NotFoundPage;
