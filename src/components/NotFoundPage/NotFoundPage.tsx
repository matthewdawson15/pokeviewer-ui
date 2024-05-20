import React, { ReactElement } from "react";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorPage from "../../blocks/ErrorPage/ErrorPage";
import Button from "../../blocks/Button/Button";
import Icon from "../../blocks/Icon/Icon";

function NotFoundPage(): ReactElement {
  return (
    <ErrorPage>
      <>
        <h1>Error 404 - Page not found</h1>
        <p>Sorry, this page URL doesn't exist.</p>
        <Button onClick={(): void => location.assign("/")}>
          <>
            <Icon icon={faLongArrowLeft} />
            <span>Return to PokéViewer</span>
          </>
        </Button>
      </>
    </ErrorPage>
  );
}

export default NotFoundPage;
