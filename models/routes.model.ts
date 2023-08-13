export const Routes = {
  HOME: {
    path: '/',
    name: 'Home'
  },
  CHARACTERS: {
    path: '/rickandmorty/characters',
    name: 'Characters'
  }
}

export interface Route {
  path: string
  name: string
}
