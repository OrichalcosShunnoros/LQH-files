import { useParams } from "react-router-dom";

export const Movements = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>{category.replace("-", " ")}</h2>
      <p>Learning {category}...</p>
    </div>
  );
};
