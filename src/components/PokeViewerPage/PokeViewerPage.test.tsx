import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import * as apiHelpers from "../../helpers/api";
import PokeViewerPage from "./PokeViewerPage";
import { PokeApiRes } from "../../types/pokemonApi";

describe("PokeViewerPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  test("Renders Loading Spinner while retrieving Pokemon Data", async () => {
    // mock response with example data
    const mockData: PokeApiRes = {
      count: 1,
      next: null,
      previous: null,
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    };

    jest.spyOn(apiHelpers, "getPokeTileData").mockResolvedValueOnce(mockData);

    render(<PokeViewerPage />);

    expect(screen.getByText(/Loading Pokémon.../i)).toBeInTheDocument();

    await act(async () => {
      await Promise.resolve();
    });

    // Ensure LoadingSpinner is replaced by the main content after data loads
    expect(screen.queryByText(/Loading Pokémon.../i)).toBeNull();
    expect(screen.getByText(/Generation 1 Pokémon/i)).toBeInTheDocument();
  });

  test("Renders Pokemon tiles with correctly received data", async () => {
    // mock response with example data
    const mockData: PokeApiRes = {
      count: 6,
      next: null,
      previous: null,
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
        { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
        { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
      ],
    };

    jest.spyOn(apiHelpers, "getPokeTileData").mockResolvedValueOnce(mockData);

    render(<PokeViewerPage />);

    // wait for data to load in (so that loading spinner should be gone)
    await act(async () => {
      await Promise.resolve();
    });

    // Make sure loading spinner is gone
    expect(screen.queryByText(/Loading Pokémon.../i)).toBeNull();

    // Check the main page has been rendered
    expect(screen.getByText(/Generation 1 Pokémon/i)).toBeInTheDocument();

    // Check the tiles have been rendered
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
    expect(screen.getByText(/venusaur/i)).toBeInTheDocument();
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
    expect(screen.getByText(/charmeleon/i)).toBeInTheDocument();
    expect(screen.getByText(/charizard/i)).toBeInTheDocument();
  });

  test("Displays No Content Available message when poke tile data array is empty", async () => {
    // mock response with no data
    const mockData: PokeApiRes = {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };

    jest.spyOn(apiHelpers, "getPokeTileData").mockResolvedValueOnce(mockData);

    render(<PokeViewerPage />);

    // wait for data to load in (so that loading spinner should be gone)
    await act(async () => {
      await Promise.resolve();
    });

    // Make sure no content is displayed
    expect(screen.getByText(/No Pokémon Available/i)).toBeInTheDocument();

    // Make sure loading spinner is gone
    expect(screen.queryByText(/Loading Pokémon.../i)).toBeNull();

    // Check the main page has NOT been rendered
    expect(screen.queryByText(/Generation 1 Pokémon/i)).toBeNull();

    // Check the tiles have NOT been rendered
    expect(screen.queryByText(/bulbasaur/i)).toBeNull();
    expect(screen.queryByText(/ivysaur/i)).toBeNull();
    expect(screen.queryByText(/venusaur/i)).toBeNull();
    expect(screen.queryByText(/charmander/i)).toBeNull();
    expect(screen.queryByText(/charmeleon/i)).toBeNull();
  });

  test("Search bar filters the Pokemon tiles", async () => {
    const mockData: PokeApiRes = {
      count: 6,
      next: null,
      previous: null,
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
        { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
        { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
      ],
    };

    jest.spyOn(apiHelpers, "getPokeTileData").mockResolvedValueOnce(mockData);

    render(<PokeViewerPage />);

    await act(async () => {
      await Promise.resolve();
    });

    // Type 'char' into the search box
    const searchInput = screen.getByPlaceholderText(
      /search by name or pokédex number.../i
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "char" } });

    expect(searchInput.value).toBe("char");

    // Check the three "char" pokemon are rendered
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
    expect(screen.getByText(/charmeleon/i)).toBeInTheDocument();
    expect(screen.getByText(/charizard/i)).toBeInTheDocument();

    // Check the other pokemon are NOT rendered
    expect(screen.queryByText(/bulbasaur/i)).toBeNull();
    expect(screen.queryByText(/ivysaur/i)).toBeNull();
    expect(screen.queryByText(/venusaur/i)).toBeNull();
  });
});
