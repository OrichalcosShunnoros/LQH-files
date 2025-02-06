import { useParams } from "react-router-dom";
import { BeltInfo } from "./../../Components/belts/BeltInfo"
import { BeltTable } from "../../Components/BeltTable/BeltTable";

export const Theory = () => {
  const { category } = useParams();
  return (
    <div>
      { 
        category === 'theory' ? 'Theory in progress...' :
        category === 'grades' ? <BeltTable /> : 
        category === "exam" ? <BeltInfo /> : 
        category === 'regulation' ? 'Regulation in progress...' :
        ''
      }
    </div>
  );
};
