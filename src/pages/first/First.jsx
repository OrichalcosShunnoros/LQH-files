import { BeltTable } from "../../Components/BeltTable/BeltTable";
import { Concepts } from "../../Components/concepts/Concepts";
import { BeltInfo } from "../../Components/belts/BeltInfo"
import { Loader } from "../../Components/loader/Loader";
import { PageNotFound } from "../404/PageNotFound";
import { useParams } from "react-router-dom";

export const First = () => {
  const { category } = useParams();
  const validCategories = ['theory', 'grades', 'exam', 'regulation'];

  return (
    <div>
      {
      validCategories.includes(category) && category === validCategories[0] ? <Concepts /> : 
      validCategories.includes(category) && category === validCategories[1] ? <BeltTable /> : 
      validCategories.includes(category) && category === validCategories[2] ? <BeltInfo /> : 
      validCategories.includes(category) && category === validCategories[3] ? <Loader /> : 
      <PageNotFound />
      }
    </div>
  );
};
