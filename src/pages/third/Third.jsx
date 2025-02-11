import { useParams } from "react-router-dom";
import { PageNotFound } from "../404/PageNotFound";
import { FiguresWithOutWeapons } from "./componentsT/FiguresWithOutWeapons";
import { FiguresWithWeapons } from "./componentsT/FiguresWithWeapons"
import { MovesWithOutWeapons } from "./componentsT/MovesWithOutWeapons";
import { MovesWithWeapons } from "./componentsT/MovesWithWeapons";
import { Techniques } from "./componentsT/Techniques";
// import { Loader } from "../../Components/loader/Loader";

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
      { 
        validCategories.includes(category) && category === validCategories[0] ? <MovesWithOutWeapons /> :
        validCategories.includes(category) && category === validCategories[1] ? <MovesWithWeapons /> :
        validCategories.includes(category) && category === validCategories[2] ? <FiguresWithOutWeapons /> :
        validCategories.includes(category) && category === validCategories[3] ? <FiguresWithWeapons /> :
        validCategories.includes(category) && category === validCategories[4] ? <Techniques/> :
        <PageNotFound />
      }

    </div>
  );
};