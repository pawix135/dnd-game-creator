"use client";

import { User } from "lucide-react";
import CardLink from "../CardLink";

import classesIcon from "../../../../public/icons/classes.png";
import playersIcon from "../../../../public/icons/players.png";
import racesIcon from "../../../../public/icons/races.png";
import traitsIcon from "../../../../public/icons/traits.png";

interface Props {}

const GamePropertiesLinksDisplay: React.FC<Props> = () => {
  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-5 p-5">
      <CardLink href={"/players"} icon={playersIcon}>
        Players
      </CardLink>
      <CardLink href={"/classes"} icon={classesIcon}>
        Classes
      </CardLink>
      <CardLink href={"/races"} icon={racesIcon}>
        Races
      </CardLink>
      <CardLink href={"/traits"} icon={traitsIcon}>
        Traits
      </CardLink>
    </div>
  );
};

export default GamePropertiesLinksDisplay;
