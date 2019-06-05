import { comments } from '@/Utils/fixtures'

export const getComment = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comments.find(c => c.id === id))
    })
  })
}

export const getComments = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comments)
    })
  })
}
