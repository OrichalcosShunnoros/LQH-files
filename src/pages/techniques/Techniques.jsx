import { useParams } from "react-router-dom";

export const Techniques = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>{category.replace("-", " ")}</h2>
      <p>Details about {category}...</p>
    </div>
  );
};
