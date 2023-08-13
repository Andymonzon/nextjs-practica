import Link from 'next/link'
import style from './Pagination.module.css'

interface Prop {
  params: any
}

function Pagination ({ params }: Prop) {
  const paramsNumber = parseInt(params)

  return (
    <>
        <Link href={{
          pathname: '/rickandmorty/characters',
          query: {
            page: paramsNumber > 1 ? paramsNumber - 1 : 1
          }
        }} className={paramsNumber === 1 ? style.disable : ''}>prev</Link> {/* prev */}

        <Link href={{
          pathname: '/rickandmorty/characters',
          query: {
            page: paramsNumber < 42 ? paramsNumber + 1 : paramsNumber
          }
        }} className={paramsNumber === 42 ? style.disable : ''}>next</Link> {/* next */}
    </>
  )
}
export default Pagination
