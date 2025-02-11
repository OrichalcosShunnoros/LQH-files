import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Aside } from "./Layouts/Aside/Aside";
import { Main } from "./Layouts/Main/Main";
import './App.css';

export const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <BrowserRouter className="App">
      <Aside onToggle={setIsCollapsed} />
      <Main isCollapsed={isCollapsed} />
    </BrowserRouter>
  );
};
