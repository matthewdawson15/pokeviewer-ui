import React, { ReactElement, useState } from "react";
import { PokeTileDTO } from "../../types/pokemonDTO";
import "./PokeTile.scss";
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

  /**
   * Function to generate the image URL for each pokemon tile
   *
   * (pokeImageBaseUrl would be moves to a constant file if used in
   * multiple locations)
   *
   * @param id the pokemon's unique ID
   * @returns raw github URL string linking to the official artwork
   * image of the pokemon on the PokeAPI's repo
   */
  function createPokeImageURL(id: number): string {
    const pokeImageBaseUrl: string =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    return pokeImageBaseUrl + id + ".png";
  }

  /**
   * Function to capitalise a string
   *
   * @param string the string to capitalise
   * @returns the capitalised string
   */
  function capitalise(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Function to create a human readable version of
   * a pokemon's name, including capitalisation and a more
   * user friendly male/female designation
   *
   * @param name the original pokemon name string
   * @returns the more user friendly name
   */
  function generatePokeName(name: string): string {
    const userFriendlyName: string = name.endsWith("-m")
      ? name.slice(0, -2) + " (Male)"
      : name.endsWith("-f")
      ? name.slice(0, -2) + " (Female)"
      : name;

    return capitalise(userFriendlyName);
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
      />
      <span className="poke-tile__name">
        {generatePokeName(pokeTileDTO.name)}
      </span>
      <span className="poke-tile__id">Pokédex Number: {pokeTileDTO.id}</span>
    </button>
  );
}

export default PokeTile;

