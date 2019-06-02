import { users } from '@/Utils/fixtures'

export const getUser = email => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users.find(u => u.email === email))
    }, 0)
  })
}

export const getAllUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users)
    }, 0)
  })
}
