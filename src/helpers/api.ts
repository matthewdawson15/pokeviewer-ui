import axios from "axios";
import { PokeAPIParams, PokeApiRes, Pokemon } from "../types/pokemonApi";
import { POKE_BASE_URL } from "../constants/urls";

const POKE_API_BASE_URL: string = POKE_BASE_URL + "api/v2/pokemon/";

/**
 * Default getRequest function for any URL
 *
 * @param url the API URL to request
 * @param params query params to pass to the request
 * @returns promise containing API response object
 */
async function getRequest(url: string, params: Object = {}): Promise<Object> {
  return axios({
    url,
    method: "get",
    responseType: "json",
    params,
  })
    .then((response) => response.data)
    .catch((error) => {
      // without time constraints, errors would be handled with react-toastify
      if (error.response && error.response.status) {
        console.error("error status: ", error.response.status);
      }
      console.error("error message: ", error.message);
    });
}

/**
 * Function to hit the base Pokemon URL to retrieve the
 * list of Pokemon
 *
 * @param params query params to pass to the request
 * @returns promise containing PokeApiRes response object
 */
export async function getPokeTileData(
  params: PokeAPIParams
): Promise<PokeApiRes> {
  const url: string = POKE_API_BASE_URL;
  // type assert the default getRequest response object to allow a PokeApiRes to be returned from it
  return (await getRequest(url, params)) as PokeApiRes;
}

/**
 * Function to retrieve detailed infor for one Pokemon
 * using its unique ID
 *
 * @param id the unique Pokemon ID
 * @returns promise containnig Pokemon object
 */
export async function getPokemonData(id: number): Promise<Pokemon> {
  const url: string = POKE_API_BASE_URL + id;
  return (await getRequest(url)) as Pokemon;
}
