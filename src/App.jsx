import { BrowserRouter } from "react-router-dom"
import { Aside } from "./Layouts/Aside/Aside"
import { Main } from "./Layouts/Main/Main"
import './App.css'

export const App = () => {
  return (
    <BrowserRouter className="App">
      <Aside />
      <Main />
    </BrowserRouter>
  )
}