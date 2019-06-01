import { Users } from '../../fixtures'

export const getAuthor = userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Users.find(({ id, name, bio }) => {
          if (id === userId) return { id, name, bio }
        }),
      )
    }, 0)
  })
}

export const getAuthors = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Users.map(({ id, name, bio }) => {
          id, name, bio
        }),
      )
    })
  })
}
