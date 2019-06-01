import { Users } from '../../fixtures'

export const getUser = email => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Users.filter(u => u.email === email))
    }, 0)
  })
}

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.values(Users))
    }, 0)
  })
}
