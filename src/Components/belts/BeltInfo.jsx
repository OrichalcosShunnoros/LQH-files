import { useState } from "react";
import { BeltTabs } from "./BeltTabs";
import { BeltDetails } from "./BeltDetails";
import { beltData } from "./../BeltTable/BeltDt";
import "./BeltInfo.css";

export const BeltInfo = () => {
  const [selectedBelt, setSelectedBelt] = useState(beltData[0].name);

  return (
    <div className="belt-container">
      <BeltTabs selectedBelt={selectedBelt} setSelectedBelt={setSelectedBelt} />
      <BeltDetails selectedBelt={selectedBelt} />
    </div>
  );
};