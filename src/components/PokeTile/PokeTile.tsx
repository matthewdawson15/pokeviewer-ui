import React, { ReactElement, useState } from "react";
import { PokeTileDTO } from "../../types/pokemonDTO";
import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";
import { pokeImageBaseUrl } from "../../constants/urls";
import "./PokeTile.scss";

type PokeTileProps = {
  onClick: () => void;
  pokeTileDTO: PokeTileDTO;
};

/**
 * Component to render a tile for a given Pokemon, with name, ID and image
 *
 * @param onClick callback function to trigger when tile is clicked
 * @param pokeTileDTO DTO of the Pokemon tile data (name, ID and further info URL)
 * @returns PokeTile react element
 */
function PokeTile({ onClick, pokeTileDTO }: PokeTileProps): ReactElement {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  /**
   * Function to generate the image URL for each pokemon tile
   *
   * @param id the pokemon's unique ID
   * @returns raw github URL string linking to the official artwork
   * image of the pokemon on the PokeAPI's repo
   */
  function createPokeImageURL(id: number): string {
    return pokeImageBaseUrl + id + ".png";
  }

  return (
    <button className="poke-tile" onClick={onClick}>
      {!imageLoaded && (
        <LoadingSpinner height={142} className="poke-tile__spinner" />
      )}
      <img
        style={imageLoaded ? {} : { display: "none" }}
        className="poke-tile__image"
        src={createPokeImageURL(pokeTileDTO.id)}
        onLoad={(): void => setImageLoaded(true)}
        alt={`Pokemon animated gif for ${pokeTileDTO.name} (#${pokeTileDTO.id}})`}
      />
      <span className="poke-tile__name">
        {pokeTileDTO.name} (#{pokeTileDTO.id})
      </span>
    </button>
  );
}

export default PokeTile;
