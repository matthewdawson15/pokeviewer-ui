import React, { ReactElement, useEffect, useState } from "react";
import Button from "../../blocks/Button/Button";
import { getPokemonData } from "../../helpers/api";
import "./PokeDetails.scss";
import { Ability, Move, Pokemon, Type } from "../../types/pokemonApi";
import {
  AbilityDTO,
  CharacteristicsDTO,
  ImagesDTO,
  MediaDTO,
  MoveDTO,
  PokemonDTO,
} from "../../types/pokemonDTO";

type PokeDetailsProps = {
  id: number;
  setSelectedPokemon: () => void;
};

/**
 * Component to display a list of tile components showing basic information for each creature
 *
 * @returns PokeList react element
 */
function PokeDetails({
  id,
  setSelectedPokemon,
}: PokeDetailsProps): ReactElement {
  const [pokeDetails, setPokeDetails] = useState<PokemonDTO | null>(null);

  const [pokeDetailsLoading, setPokeDetailsLoading] = useState<boolean>(false);

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

      const imagesDTO: ImagesDTO = {
        artwork: pokemon.sprites.other["official-artwork"].front_default,
        animation: pokemon.sprites.other.showdown.front_default,
      };

      const media: MediaDTO = {
        images: imagesDTO,
        cry: pokemon.cries.latest,
      };

      const pokemonDTO: PokemonDTO = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        species: pokemon.species.name,
        characteristics: characteristics,
        media: media,
      };

      setPokeDetails(pokemonDTO);
      setPokeDetailsLoading(false);
    });
  }

  useEffect((): void => fetchPokeDetails(), []);

  return (
    <div>
      <h1>{pokeDetails?.name}</h1>
      <p>Pokédex Number: {pokeDetails?.id}</p>
      <Button onClick={setSelectedPokemon}>
        <span>Close</span>
      </Button>
    </div>
  );
}

export default PokeDetails;
