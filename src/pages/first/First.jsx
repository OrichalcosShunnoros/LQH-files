import { useParams } from "react-router-dom";
import { BeltInfo } from "../../Components/belts/BeltInfo"
import { BeltTable } from "../../Components/BeltTable/BeltTable";
import { Concepts } from "../../Components/concepts/Concepts";
import { PageNotFound } from "../404/PageNotFound";
// import { Logo } from "../../pages/404/LogoRct";

export const First = () => {
  const { category } = useParams();
  return (
    <div>
      { 
        category === 'theory' ? <Concepts /> :
        category === 'grades' ? <BeltTable /> : 
        category === "exam" ? <BeltInfo /> : 
        category === 'regulation' ? 'Regulation in progress...' :
        <PageNotFound />
      }
    </div>
  );
};
