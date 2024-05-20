import React from "react";

type NoContentProps = {
  keyword?: string;
};

const NoContent = ({ keyword = "Pokémon" }: NoContentProps) => (
  <div className="error-page">
    <h2>No {keyword} Available</h2>
    <p>
      There may be an issue with the PokeAPI. Please refresh the page to try
      again.
    </p>
    
  </div>
);

export default NoContent;
