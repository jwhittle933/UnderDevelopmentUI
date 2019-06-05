import { users } from '@/Utils/fixtures'

export const getAuthor = userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        users.find(({ id, name, bio }) => {
          if (id === parseInt(userId)) return { id, name, bio }
        }),
      )
    }, 0)
  })
}

export const getAuthors = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        users.map(({ id, name, bio }) => {
          id, name, bio
        }),
      )
    })
  })
}
