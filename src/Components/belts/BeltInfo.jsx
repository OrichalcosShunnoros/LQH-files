import { useState } from "react";
import { BeltTabs } from "./BeltTabs";
import { BeltDetails } from "./BeltDetails";
import { belts } from "./BeltData";
import "./BeltInfo.css";

export const BeltInfo = () => {
  const [selectedBelt, setSelectedBelt] = useState(belts[0].name);
  const selectedBeltInfo = belts.find((belt) => belt.name === selectedBelt);

  return (
    <div className="belt-container">
      <BeltTabs selectedBelt={selectedBelt} setSelectedBelt={setSelectedBelt} />
      <BeltDetails belt={selectedBeltInfo} />
      {/* <BeltDetails belt={{ name: "Cinturón Negro", img: "black-belt.png", poomsae: "Koryo" }} /> */}

    </div>
  );
};

