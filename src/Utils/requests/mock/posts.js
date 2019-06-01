import { Posts } from '../../fixtures'

export const getPost = postId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Posts.find(p => p.id === postId))
    }, 0)
  })
}

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.values(Posts))
    })
  })
}

export const createPost = ({ title, body, visible, userId, featuredImage }) => {
  if (!title || !body || !visible || !userId) return
}
