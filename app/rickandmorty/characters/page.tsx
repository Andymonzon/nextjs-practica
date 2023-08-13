import { Pagination, Card } from '../../../components'
import { getCharacters } from './services'
import style from './characters.module.css'
import { Suspense } from 'react'

async function characters ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams.page ?? '1'
  const characters = await getCharacters(+page)

  return (
    <Suspense>
      <div className={style.containerCharacters}>
        {characters.map((character) => (
          <Card key={character.id} data={character} />
        ))}
      </div>
      <div className={style.containerPagination}>
        <Pagination params={page} />
      </div>
    </Suspense>
  )
}
export default characters
