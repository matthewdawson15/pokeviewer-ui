import React, { ReactElement, ReactNode } from "react";
import PokeCharacteristicWrapper from "../../blocks/PokeCharacteristicWrapper/PokeCharacteristicWrapper";
import { AbilityDTO, CharacteristicsDTO } from "../../types/pokemonDTO";
import PokeStatsTable from "../PokeStatsTable/PokeStatsTable";
interface PokeCharacteristicsProps {
  characteristics: CharacteristicsDTO;
}

function PokeCharacteristics({
  characteristics,
}: PokeCharacteristicsProps): ReactElement {
  return (
    <>
      {characteristics.stats.length > 0 && (
        <PokeStatsTable pokeStats={characteristics.stats} />
      )}

      {characteristics.abilities.length > 0 && (
        <PokeCharacteristicWrapper characteristicName="Abilities">
          <>
            {characteristics.abilities.map(
              (ability: AbilityDTO, index: number): ReactNode => (
                <li key={index}>
                  {ability.ability}
                  {ability.isHidden ? " (Hidden Ability)" : ""}
                </li>
              )
            )}
          </>
        </PokeCharacteristicWrapper>
      )}

      {characteristics.types.length > 0 && (
        <PokeCharacteristicWrapper characteristicName="Types">
          <>
            {characteristics.types.map(
              (type: string, index: number): ReactNode => (
                <li key={index}>{type}</li>
              )
            )}
          </>
        </PokeCharacteristicWrapper>
      )}
    </>
  );
}

export default PokeCharacteristics;
