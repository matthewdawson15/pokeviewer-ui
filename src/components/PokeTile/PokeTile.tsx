import React, { ReactElement, useState } from "react";
import { PokeTileDTO } from "../../types/pokemonDTO";
import "./PokeTile.scss";
import { generatePokeName, createPokeImageURL } from "../../helpers/primitives";
import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";

type PokeTileProps = {
  onClick: () => void;
  pokeTileDTO: PokeTileDTO;
};

/**
 *
 * @param onClick callback function to trigger when tile is clicked
 * @param pokeTileDTO DTO of the Pokemon tile data (name, ID and further info URL)
 * @returns PokeTile react element
 */
function PokeTile({ onClick, pokeTileDTO }: PokeTileProps): ReactElement {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <button className="poke-tile" onClick={onClick}>
      {!imageLoaded && (
        <LoadingSpinner height={137.59} className="poke-tile__spinner" />
      )}
      <img
        style={imageLoaded ? {} : { display: "none" }}
        className="poke-tile__image"
        src={createPokeImageURL(pokeTileDTO.id)}
        onLoad={(): void => setImageLoaded(true)}
      />
      <span className="poke-tile__name">
        {generatePokeName(pokeTileDTO.name)}
      </span>
      <span className="poke-tile__id">Pokédex Number: {pokeTileDTO.id}</span>
    </button>
  );
}

export default PokeTile;

/*
  function playCry(): void {
    var audio = new Audio(
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg"
    );
    audio.play();
    // play loading spinner and hide play button while playing
    // have this in the modal

    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
  }
  */

/* 

  return (
    <div className={className}>
      <h1>Generation 1 Pokémon</h1>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      <button onClick={playCry}>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif" />
      </button>
      <div className="test-div">
        <p className="test-div__test-text">Bulbasaur</p>
      </div>
    </div>
  );

*/
