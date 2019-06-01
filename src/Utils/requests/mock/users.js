import { Users } from '../../fixtures'

export const getUser = email => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Users.find(u => u.email === email))
    }, 0)
  })
}

export const getAllUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Users)
    }, 0)
  })
}
