import React, { ReactElement, useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";
import { ParentProps } from "../../types/props";
import "./PokeCharacteristicWrapper.scss";

interface PokeCharacteristicWrapperProps extends ParentProps {
  characteristicName: string;
}

function PokeCharacteristicWrapper({
  characteristicName,
  children,
}: PokeCharacteristicWrapperProps): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="characteristic">
      <div>
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
      {expanded && children}
    </div>
  );
}

export default PokeCharacteristicWrapper;
