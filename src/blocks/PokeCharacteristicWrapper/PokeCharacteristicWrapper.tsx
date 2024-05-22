import React, { ReactElement, useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";
import { ParentProps } from "../../types/props";
import "./PokeCharacteristicWrapper.scss";

interface PokeCharacteristicWrapperProps extends ParentProps {
  characteristicName: string;
}

/**
 * Block component to hide a pokemon's characteristic element behind
 * an expandable dropdown button
 */
function PokeCharacteristicWrapper({
  characteristicName,
  children,
}: PokeCharacteristicWrapperProps): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="characteristic">
      <div className="characteristic__title-wrapper">
        <h2 className="characteristic__title">{characteristicName}</h2>
        <button
          className="characteristic__dropdown-button"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <Icon
            className="characteristic__dropdown-button__icon"
            icon={expanded ? faCaretUp : faCaretDown}
          />
        </button>
      </div>
      {expanded && <ul className="characteristic__list">{children}</ul>}
    </div>
  );
}

export default PokeCharacteristicWrapper;
