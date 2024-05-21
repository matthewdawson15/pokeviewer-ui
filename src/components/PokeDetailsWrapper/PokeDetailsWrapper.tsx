import React, { ReactElement, useEffect, useState } from "react";
import LoadingSpinner from "../../blocks/LoadingSpinner/LoadingSpinner";
import NoContent from "../../blocks/NoContent/NoContent";
import { getPokemonData } from "../../helpers/api";
import { Ability, Move, Pokemon, Type } from "../../types/pokemonApi";
import {
  AbilityDTO,
  CharacteristicsDTO,
  MediaDTO,
  MoveDTO,
  PokemonDTO,
} from "../../types/pokemonDTO";
import PokeDetails from "../PokeDetails/PokeDetails";

type PokeDetailsWrapperProps = {
  id: number;
  setSelectedPokemon: () => void;
};

/**
 * Component to retrieve the detailed info for each Pokemon
 *
 * @returns PokeDetailsWrapper react element
 */
function PokeDetailsWrapper({
  id,
  setSelectedPokemon,
}: PokeDetailsWrapperProps): ReactElement {
  const [pokeDetails, setPokeDetails] = useState<PokemonDTO | null>(null);

  const [pokeDetailsLoading, setPokeDetailsLoading] = useState<boolean>(false);

  /**
   * Fetch the detailed info for the Pokemon, then parse it into a DTO
   * object for further use within app
   *
   * Use of the DTO prevents any unwanted properties from being
   * unintentionally let into the app.
   */
  function fetchPokeDetails(): void {
    setPokeDetailsLoading(true);

    getPokemonData(id).then((pokemon: Pokemon) => {
      const characteristics: CharacteristicsDTO = {
        abilities: pokemon.abilities.map(
          (pokeAbility: Ability): AbilityDTO => ({
            ability: pokeAbility.ability.name,
            isHidden: pokeAbility.is_hidden,
          })
        ),
        moves: pokemon.moves.map(
          (pokeMove: Move): MoveDTO => ({
            move: pokeMove.move.name,
            levelLearned: pokeMove.version_group_details[0].level_learned_at,
          })
        ),
        types: pokemon.types.map(
          (pokeType: Type): string => pokeType.type.name
        ),
      };

      const media: MediaDTO = {
        artwork: pokemon.sprites.other["official-artwork"].front_default,
        cry: pokemon.cries.latest,
      };

      const pokemonDTO: PokemonDTO = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        characteristics: characteristics,
        media: media,
      };

      setPokeDetails(pokemonDTO);
      setPokeDetailsLoading(false);
    });
  }

  // fetch details on modal load
  useEffect((): void => fetchPokeDetails(), []);

  return !pokeDetails || pokeDetailsLoading ? (
    <LoadingSpinner text="Loading Pokemon Details..." />
  ) : pokeDetails ? (
    <PokeDetails
      pokeDetails={pokeDetails}
      setSelectedPokemon={setSelectedPokemon}
    />
  ) : (
    <NoContent keyword="Pokémon Details" />
  );
}

export default PokeDetailsWrapper;
