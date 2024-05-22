import React, { ChangeEvent, ReactElement } from "react";
import Input from "../Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

interface SearchProps {
  id: string;
  label?: string;
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  cancelSearch: () => void;
  placeholder?: string;
  icon?: boolean;
}

/**
 * SearchBox block component to generate a dynamic search box for the user to type in using
 * the Input component.
 *
 * Has options for the Input's ID, label, search value, placeholder text,
 * and boolean to show or hide an optional magnifying glass icon.
 *
 * Functions are also supplied to be executed when the search value
 * changes or when the search box is cleared.
 */
function Search({
  id,
  label = "",
  search,
  handleSearch,
  cancelSearch,
  placeholder = "",
  icon = false,
}: SearchProps): ReactElement {
  return (
    <div className="search">
      <Input
        wrapperClassName="item-control-wrapper"
        labelClassName="search__label"
        id={id}
        label={label}
        placeholder={placeholder}
        value={search}
        icon={icon ? <FontAwesomeIcon icon={faSearch} /> : null}
        onChange={handleSearch}
        cancelInput={cancelSearch}
      />
    </div>
  );
}

export default Search;
