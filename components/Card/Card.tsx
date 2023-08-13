import { type Character } from 'app/rickandmorty/characters/models'
import { characterBlur } from 'app/models'
import Image from 'next/image'

interface Prop {
  data: Character
}

function Card ({ data }: Prop) {
  return (
    <div>
        <Image src={data.image} alt={data.name} width={200} height={200} priority blurDataURL={characterBlur} placeholder='blur'/>
        <p>{data.name}</p>
        <p>status: {data.status}</p>
        <p>gender: {data.gender}</p>
    </div>
  )
}
export default Card
