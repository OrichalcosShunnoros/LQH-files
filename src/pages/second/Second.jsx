import { useParams } from "react-router-dom";
import { PageNotFound } from "../404/PageNotFound";

export const Second = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>{category.replace("-", " ")}</h2>
            { 
              category === 'positions' ? 'Position in progress...' :
              category === 'blows' ? 'Blows in progress...' : 
              category === 'locks' ? 'Locks in progress...' : 
              category === 'kicks' ? 'Kicks in progress...' :
              category === 'displacements' ? 'Displacements in progress...' :
              category === 'gymnastics' ? 'Gymnastics in progress...' :
              <PageNotFound />
            }
    </div>
  );
};
