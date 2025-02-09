import { useParams } from "react-router-dom";
import { PageNotFound } from "../404/PageNotFound";
import { Loader } from "../../Components/loader/Loader";

export const Third = () => {
  const { category } = useParams();
  const validCategories = [
    'moves-without-weapons',
    'moves-with-weapons',
    'figures-without-weapons',
    'figures-with-weapons',
    'techniques'
  ];

  return (
    <div>
      {/* logic pending */}
      {validCategories.includes(category) ? <Loader category={category} /> : <PageNotFound />}
    </div>
  );
};