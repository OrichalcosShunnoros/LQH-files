import { Navbar } from "../../Components/Navbar/Navbar"
import { HeadNav } from "../../Components/HeadNav/HeadNav"
import { Configure } from "../../Components/Configure/Configure"
import './Aside.css'

export const Aside = () => {
  return (
    <aside>
        <HeadNav />
        <Navbar />
        <Configure />
    </aside>
  )
}
