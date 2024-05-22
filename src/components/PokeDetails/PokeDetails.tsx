import React, { ReactElement, useState } from "react";
import Button from "../../blocks/Button/Button";
import { generatePokeName } from "../../helpers/string";
import { PokemonDTO } from "../../types/pokemonDTO";
import "./PokeDetails.scss";
import PokeCharacteristics from "../PokeCharacteristics/PokeCharacteristics";

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
      <button
        className="poke-details__play-button"
        onClick={playCry}
        disabled={cryPlaying}
      >
        <img
          className="poke-details__play-button__image"
          src={pokeDetails.media.artwork}
          alt={`official artwork for ${pokeDetails.name}(#${pokeDetails.id})`}
        />
      </button>
      <h1 className="poke-details__title">{`${generatePokeName(
        pokeDetails.name
      )} (#${pokeDetails.id})`}</h1>

      <div>
        <span className="poke-details__property-name poke-details__height">
          {`Height:  ${pokeDetails.height}`}
        </span>
        <span className="poke-details__property-name">
          {`Weight:  ${pokeDetails.weight}`}
        </span>
      </div>

      {Object.keys(pokeDetails.characteristics).length > 0 && (
        <PokeCharacteristics characteristics={pokeDetails.characteristics} />
      )}

      <Button onClick={setSelectedPokemon}>
        <span>Close</span>
      </Button>
    </div>
  );
}

export default PokeDetails;
