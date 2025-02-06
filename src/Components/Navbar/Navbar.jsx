import { NavItemList } from "../NavItemList/NavItemList";

export const Navbar = () => {
  return (
    <nav>
      <NavItemList basePath="/theory" items={["Theory", "Grades", "Regulation", "Exam"]} />
      <hr />
      <NavItemList basePath="/techniques" items={["Positions", "Blows", "Locks", "Kicks", "Displacements", "Gymnastics"]} />
      <hr />
      <NavItemList basePath="/movements" items={["Movements without weapons", "Movements with weapons", "Figures without weapons", "Figures With weapons", "Techniques"]} />
    </nav>
  );
};
