import { Aside } from "./Layouts/Aside/Aside"
import { Main } from "./Layouts/Main/Main"
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Aside />
      <Main />
    </div>
  )
}