import { type Character } from '../models'

export const getCharacters = async (number: number = 1): Promise<Character[]> => {
  const url = `https://rickandmortyapi.com/api/character?page=${number}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log(error)
    throw error
  }
}
