import { Comments } from '../../fixtures'

export const getComment = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Comments.find(c => c.id === id))
    })
  })
}

export const getComments = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Comments)
    })
  })
}
