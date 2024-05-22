import React, { ReactElement } from "react";
import { StatDTO } from "../../types/pokemonDTO";
import "./PokeStatsTable.scss";

interface PokeStatsTableProps {
  pokeStats: StatDTO[];
}

function PokeStatsTable({ pokeStats }: PokeStatsTableProps): ReactElement {
  return (
    <>
      <h2>Stats</h2>
      <table className="poke-stats-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Base Stat</th>
            <th>EV</th>
          </tr>
        </thead>
        <tbody>
          {pokeStats.map((stat, index) => (
            <tr key={index}>
              <td>{stat.name}</td>
              <td>{stat.baseStat}</td>
              <td>{stat.effort}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PokeStatsTable;
