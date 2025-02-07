import { useParams } from "react-router-dom";

export const Techniques = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>{category.replace("-", " ")}</h2>
            { 
              category === 'position' ? 'Position in progress...' :
              category === 'Blows' ? 'Blows in progress...' : 
              category === 'locks' ? 'Locks in progress...' : 
              category === 'kicks' ? 'Kicks in progress...' :
              category === 'displacements' ? 'Displacements in progress...' :
              category === 'gymnastics' ? 'Gymnastics in progress...' :
              ''
            }
    </div>
  );
};
