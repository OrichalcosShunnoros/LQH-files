import { useParams } from "react-router-dom";

export const Techniques = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>{category.replace("-", " ")}</h2>
            { 
              category === 'theory' ? 'Theory in progress...' :
              category === 'grades' ? 'Grades in progress...' : 
              category === "exam" ? 'exa' : 
              category === 'regulation' ? 'Regulation in progress...' :
              ''
            }
    </div>
  );
};
