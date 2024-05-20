import axios from "axios";
import { PokeAPIParams, PokeApiRes } from "../types/pokemonApi";
import { pokeAPIBaseUrl } from "../constants/urls";

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
  const url: string = pokeAPIBaseUrl;
  // type assert the default getRequest response object to allow a PokeApiRes to be returned from it
  return (await getRequest(url, params)) as PokeApiRes;
}

