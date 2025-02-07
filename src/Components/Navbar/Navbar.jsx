import { NavItemList } from "../NavItemList/NavItemList";

export const Navbar = () => {
  return (
    <nav>
      <NavItemList basePath="/first" items={["Theory", "Grades", "Exam", "Regulation"]} />
      <hr />
      <NavItemList basePath="/second" items={["Positions", "Blows", "Locks", "Kicks", "Displacements", "Gymnastics"]} />
      <hr />
      <NavItemList basePath="/third" items={["Movements without weapons", "Movements with weapons", "Figures without weapons", "Figures With weapons", "Techniques"]} />
    </nav>
  );
};
