import bcrypt from 'bcrypt'
import { getUser } from './'

/**
 * Notes on login: method accepts user submitted email and password, and searches Users fixture for an item with matching email. Array.prototype.find() will return undefined if no match is found.
 *
 * If no user it matched to the email, errors will be an Object with msg and data keys. The data key will contain the user submitted info for repopulating the UI fields with relevant error messages.
 *
 * If password does not match the hash, errors.data will contain user submitted data.
 *
 * This data is very likely going to change as the api become more compelte. The client will do some validation but the api will handle these erros.
 */

export const login = (email, password) => {
  return getUser(email).then(res => {
    if (res === undefined)
      return {
        msg: `${email} is incorrect`,
        error: { field: 'email', data: { email, password } },
      }
    // eslint-disable-next-line camelcase
    const { password_hash, ...user } = res
    if (bcrypt.compareSync(password, password_hash)) {
      sessionStorage.setItem('current_user_id', user.id)
      return {
        msg: `${user.name} logged in`,
        errors: false,
      }
    } else
      return {
        msg: 'Unauthorized. The email and password do not match',
        errors: { field: 'password', data: { email, password } },
      }
  })
}

export const logout = () => {
  sessionStorage.removeItem('current_user_id')
}
