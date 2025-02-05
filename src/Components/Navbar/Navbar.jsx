import { NavItemList } from "../NavItemList/NavItemList"

export const Navbar = () => {
  return (
    <nav>
        <NavItemList items={['Theory', 'Grades', 'regulation', 'Exam']} />
        <hr />
        <NavItemList items={['Positions', 'Blows', 'Locks', 'Kicks', 'Displacements', 'Gymnastics']} />
        <hr />
        <NavItemList items={['Movements without weapons', 'Movements with weapons', 'Figures without weapons', 'Figures With weapons', 'Techniques']} />
    </nav>
  )
}
