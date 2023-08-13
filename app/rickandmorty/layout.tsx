import { Navigator } from '../../components'
import { Routes } from '../../models'
import style from './layout.module.css'

function layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={style.navbar}>
        <Navigator links={[Routes.HOME]} />
      </nav>
      {children}
    </>
  )
}
export default layout
