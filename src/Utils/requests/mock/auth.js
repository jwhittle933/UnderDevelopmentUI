import bcrypt from 'bcrypt'
import { getUser } from './'

export const login = (email, password) => {
  return getUser(email).then(res => {
    if (res === undefined) return 'Email is incorrect'
    // eslint-disable-next-line camelcase
    const { password_hash, ...user } = res
    if (bcrypt.compareSync(password, password_hash)) {
      sessionStorage.setItem('user_logged_in?', true)
      sessionStorage.setItem('user', user)
      return user
    }
  })
}

export const logout = () => {
  sessionStorage.setItem('user_logged_in?', false)
  sessionStorage.removeItem('user')
}
