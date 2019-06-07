import { posts } from './'

/* eslint-disable */
/**
 * The Users data structure as it will be kept in the persistence layer. When creating a new User (a feature only exposed for authorized users with admin: true), :email will validated on the backend for the correct format (but should still be validated on the client) and password will be validated for length > 6. As well, when creating a new user, :name, :admin, :email, and :password are required fields. The :password field will NEVER be stored in the persistence layer. When a new user is submitted for creation, the :password field will be hashed and stored, resulting in a :password_hash key on the data structure.
 *
 * To log a user in, :email and :password will be submitted to the api, which will retrieve a user from the DB by :email, and then will check the submitted :password against the stored :password_hash. If either of this checks fail, errors will be returned to the client. Perhaps in the future a limited number of login attempts may be enabled, but I'm not sure this is even necessary.
 *
 * The mock login method will check passwords with bcrypt.compareSync(password, hash) which will return true or false.
 */

export const Users = {}

Users.admin = {
  id: 1,
  name: 'admin',
  admin: true,
  email: 'admin@user.com',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat.',
  password: 'admin', //this will be :password_hash on the backend
  posts: posts,
  inserted_at: '',
  updated_at: '',
}
Users.fredCandy = {
  id: 2,
  name: 'Fred Candy',
  admin: false,
  email: 'fredsosweet@user.com',
  bio:
    'Fred got his start selling candy by the neighborhood pool when he was 6. It was clear to his parents very early ont that Fred was a self-starter, and in his first summer alone made over $16,000 on his award winning freddy-fries, a unique blend of salty and sweet made from potatoes and pure necter harvested from hive of the Indian tornado bee. Fred likes technology and mentions often how easy it is to post on Facebook. Fred is an outspoken advocate for the preservation of the Jamaican ritual of the uncle toss, and hope the world, too, will see its unique beauty.',
  password: 'theCandyman',
  posts: posts,
  inserted_at: '',
  updated_at: '',
}
Users.bobMaglone = {
  id: 3,
  name: 'Bob Maglone',
  admin: true,
  email: 'bob.maglone@notinthemob.com',
  bio:
    "Bob is the founder of MaGlone's Megaphones, Jersey's number one seller of megaphones and cheerleading equipment. His weekend hobbies include driving around Jersey in his lowrider Caddilac and playing the slots at Jimmys Jersey Slots. He two daughters and two sons, all named Bob.",
  password: 'goldenMaglone',
  posts: posts,
  inserted_at: '',
  updated_at: '',
}

export const users = Object.values(Users)
