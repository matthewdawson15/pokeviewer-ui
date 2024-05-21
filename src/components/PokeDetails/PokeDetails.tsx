import React, { ReactElement, useState } from "react";
import Button from "../../blocks/Button/Button";
import { generatePokeName } from "../../helpers/string";
import { PokemonDTO } from "../../types/pokemonDTO";
import Icon from "../../blocks/Icon/Icon";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./PokeDetails.scss";

type PokeDetailsProps = {
  pokeDetails: PokemonDTO;
  setSelectedPokemon: () => void;
};

/**
 * Component to display the detailed info for each Pokemon
 *
 * @returns PokeDetails react element
 */
function PokeDetails({
  pokeDetails,
  setSelectedPokemon,
}: PokeDetailsProps): ReactElement {
  const [cryPlaying, setCryPlaying] = useState<boolean>(false);

  /**
   * Function to play the pokemon's cry and prevent it playing further until it ends
   */
  function playCry(): void {
    setCryPlaying(true);
    const audio: HTMLAudioElement = new Audio(pokeDetails.media.cry);
    audio.play();
    audio.onended = (): void => setCryPlaying(false);
  }

  return (
    <div className="poke-details">
      <img
        className="poke-details__image"
        src={pokeDetails.media.artwork}
        alt={`official artwork for ${pokeDetails.name}(#${pokeDetails.id})`}
      />
      <h1>
        {generatePokeName(pokeDetails.name)}
        <button
          className="poke-details__play-button"
          onClick={playCry}
          disabled={cryPlaying}
        >
          <Icon
            className="poke-details__play-button__icon"
            icon={faPlayCircle}
          />
        </button>
      </h1>

      <p>
        <span className="poke-details__property-name">Pokédex Number: </span>
        {pokeDetails.id}
      </p>
      <p>
        <span className="poke-details__property-name">Height: </span>
        {pokeDetails.height}
      </p>
      <p>
        <span className="poke-details__property-name">Weight: </span>
        {pokeDetails.weight}
      </p>

      <Button onClick={setSelectedPokemon}>
        <span>Close</span>
      </Button>
    </div>
  );
}

export default PokeDetails;
