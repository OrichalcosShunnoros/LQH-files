import { useParams } from "react-router-dom";
import { PageNotFound } from "../404/PageNotFound";
import { Loader } from "../../Components/loader/Loader";

export const Second = () => {
  const { category } = useParams();
  const validCategories = ['positions', 'blows', 'locks', 'kicks', 'displacements', 'gymnastics'];

  return (
    <div>
      { 
        validCategories.includes(category) ? <Loader category={category} /> : <PageNotFound />
      }
    </div>
  );
};
