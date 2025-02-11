import { useParams } from "react-router-dom";
import { PageNotFound } from "../404/PageNotFound";
import { Positions } from './componentsS/Positions';
import { Blows } from './componentsS/Blows';
import { Locks } from './componentsS/Locks';
import { Kicks } from './componentsS/Kicks';
import { Displacements } from './componentsS/Displacements';
import { Gymnastics } from "./componentsS/Gymnastics";

export const Second = () => {
  const { category } = useParams();
  const validCategories = ['positions', 'blows', 'locks', 'kicks', 'displacements', 'gymnastics'];

  return (
    <div>
      { 
        validCategories.includes(category) && category === validCategories[0] ? <Positions /> :
        validCategories.includes(category) && category === validCategories[1] ? <Blows /> :
        validCategories.includes(category) && category === validCategories[2] ? <Locks /> :
        validCategories.includes(category) && category === validCategories[3] ? <Kicks /> :
        validCategories.includes(category) && category === validCategories[4] ? <Displacements /> :
        validCategories.includes(category) && category === validCategories[5] ? <Gymnastics /> :
        <PageNotFound />
      }
    </div>
  );
};
