import { useParams } from "react-router-dom";
import { BeltInfo } from "./../../Components/belts/BeltInfo"
export const Theory = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>{category.replace("-", " ")}</h2>
      { category === "grades" && <BeltInfo /> }
    </div>
  );
};
