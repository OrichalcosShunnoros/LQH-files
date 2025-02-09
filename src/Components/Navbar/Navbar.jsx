import { NavItemList } from "../NavItemList/NavItemList";

export const Navbar = () => {
  return (
    <nav>
      <NavItemList basePath="/first" items={["Theory", "Grades", "Exam", "Regulation"]} />
      <hr />
      <NavItemList basePath="/second" items={["Positions", "Blows", "Locks", "Kicks", "Displacements", "Gymnastics"]} />
      <hr />
      <NavItemList basePath="/third" items={["moves-without-weapons", "moves-with-weapons", "figures-without-weapons", "figures-with-weapons", "techniques"]} />
    </nav>
  );
};
