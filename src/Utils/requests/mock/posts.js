import { Posts, posts } from '@/Utils/fixtures'

const clone = object => JSON.parse(JSON.strigify(object))

const errors = ({ title, body, visible, userId }) => {
  const errors = {}
  if (!title) errors.title = "Title can't be blank"
  if (!body) errors.body = "Body can't be blank"
  if (!visible) errors.visible = "Visible can't be blank"
  if (!userId) errors.userId = "userId can't be blank"
  return { errors }
}

export const getPost = postId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts.find(p => p.id === parseInt(postId)))
    }, 0)
  })
}

export const getAllPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts)
    }, 0)
  })
}

// not sure this will work
export const createPost = ({ title, body, visible, userId, ...post }) => {
  Posts[title] = post
  return new Promise(resolve => {
    setTimeout(() => {
      if (!title || !body || !visible || !userId) resolve(errors(post))
      const posts = clone(Posts)
      resolve([...posts, post])
    }, 0)
  })
}
