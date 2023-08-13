import { Navigator } from '../components'
import { Routes } from '../models'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <h1>
        Rick and Morty
      </h1>
      <Navigator links={[Routes.CHARACTERS]}/>
    </main>
  )
}
