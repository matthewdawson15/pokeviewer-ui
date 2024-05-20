import React from "react";
import ErrorPage from "../ErrorPage/ErrorPage";

type NoContentProps = {
  keyword?: string;
};

const NoContent = ({ keyword = "Pokémon" }: NoContentProps) => (
  <ErrorPage>
    <>
      <h1>No {keyword} Available</h1>
      <p>
        There may be an issue with the PokeAPI. Please refresh the page to try
        again.
      </p>
    </>
  </ErrorPage>
);

export default NoContent;
