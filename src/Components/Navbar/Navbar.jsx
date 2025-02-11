import { useState } from "react";
import { NavItemList } from "../NavItemList/NavItemList";

export const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <nav>
      <NavItemList 
        basePath="/first" 
        items={["Theory", "Grades", "Exam", "Regulation"]} 
        selectedItem={selectedItem} 
        onSelect={handleSelect} 
      />
      <hr />
      <NavItemList 
        basePath="/second" 
        items={["Positions", "Blows", "Locks", "Kicks", "Displacements", "Gymnastics"]} 
        selectedItem={selectedItem} 
        onSelect={handleSelect} 
      />
      <hr />
      <NavItemList 
        basePath="/third" 
        items={["moves-without-weapons", "moves-with-weapons", "figures-without-weapons", "figures-with-weapons", "techniques"]} 
        selectedItem={selectedItem} 
        onSelect={handleSelect} 
      />
    </nav>
  );
};
