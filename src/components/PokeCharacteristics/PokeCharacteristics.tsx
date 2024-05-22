import React, { ReactElement, ReactNode } from "react";
import PokeCharacteristicWrapper from "../../blocks/PokeCharacteristicWrapper/PokeCharacteristicWrapper";
import { AbilityDTO, CharacteristicsDTO } from "../../types/pokemonDTO";
import StatsTable from "../PokeStatsTable/PokeStatsTable";
import "./PokeCharacteristics.scss";

interface PokeCharacteristicsProps {
  characteristics: CharacteristicsDTO;
}

function PokeCharacteristics({
  characteristics,
}: PokeCharacteristicsProps): ReactElement {
  return (
    <>
      {characteristics.stats.length > 0 && (
        <PokeCharacteristicWrapper characteristicName="Stats">
          <StatsTable pokeStats={characteristics.stats} />
        </PokeCharacteristicWrapper>
      )}

      {characteristics.abilities.length > 0 && (
        <PokeCharacteristicWrapper characteristicName="Abilities">
          <div className="characteristics-list-container">
            <ul className="characteristics-list-container__list">
              {characteristics.abilities.map(
                (ability: AbilityDTO, index: number): ReactNode => (
                  <li key={index}>
                    {ability.ability}
                    {ability.isHidden ? " (Hidden Ability)" : ""}
                  </li>
                )
              )}
            </ul>
          </div>
        </PokeCharacteristicWrapper>
      )}

      {characteristics.types.length > 0 && (
        <PokeCharacteristicWrapper characteristicName="Types">
          <div className="characteristics-list-container">
            <ul className="characteristics-list-container__list">
              {characteristics.types.map(
                (type: string, index: number): ReactNode => (
                  <li key={index}>{type}</li>
                )
              )}
            </ul>
          </div>
        </PokeCharacteristicWrapper>
      )}
    </>
  );
}

export default PokeCharacteristics;
