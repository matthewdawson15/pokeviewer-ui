import React, { ReactElement, useEffect, useState } from "react";
import { PokeTileDTO } from "../../types/pokemonDTO";
import Button from "../../blocks/Button/Button";
import "./PokeDetails.scss";

type PokeDetailsProps = {
  selectedPokemon: PokeTileDTO;
  setSelectedPokemon: () => void;
};

/**
 * Component to display a list of tile components showing basic information for each creature
 *
 * @returns PokeList react element
 */
function PokeDetails({
  selectedPokemon,
  setSelectedPokemon,
}: PokeDetailsProps): ReactElement {
  return (
    <div>
      <h1>{selectedPokemon.name}</h1>
      <p>Pokédex Number: {selectedPokemon.id}</p>
      <Button onClick={setSelectedPokemon}>
        <span>Close</span>
      </Button>
    </div>
  );
}

export default PokeDetails;
