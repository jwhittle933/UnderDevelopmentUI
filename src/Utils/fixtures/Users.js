import bcrypt from 'bcrypt'
const salt = bcrypt.genSaltSync(10)

import { Posts } from './'

/* eslint-disable */
/**
 * The Users data structure as it will be kept in the persistence layer. When creating a new User (a feature only exposed for authorized users with admin: true), :email will validated on the backend for the correct format (but should still be validated on the client) and password will be validated for length > 6. As well, when creating a new user, :name, :admin, :email, and :password are required fields. The :password field will NEVER be stored in the persistence layer. When a new user is submitted for creation, the :password field will be hashed and stored, resulting in a :password_hash key on the data structure.
 *
 * To log a user in, :email and :password will be submitted to the api, which will retrieve a user from the DB by :email, and then will check the submitted :password against the stored :password_hash. If either of this checks fail, errors will be returned to the client. Perhaps in the future a limited number of login attempts may be enabled, but I'm not sure this is even necessary.
 *
 * The mock login method will check passwords with bcrypt.compareSync(password, hash) which will return true or false.
 */

const users = {}

users.admin = {
  id: 1,
  name: 'admin',
  admin: true,
  email: 'admin@user.com',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo.Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potenti.Vivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  password_hash: bcrypt.hashSync('admin', salt),
  posts: Posts,
  inserted_at: '',
  updated_at: '',
}
users.fredCandy = {
  id: 2,
  name: 'Fred Candy',
  admin: false,
  email: 'fredsosweet@user.com',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo.Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potenti.Vivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui',
  password_hash: bcrypt.hashSync('theCandyman', salt),
  posts: Posts,
  inserted_at: '',
  updated_at: '',
}
users.bobMaglone = {
  id: 3,
  name: 'Bob Maglone',
  admin: true,
  email: 'bob.maglone@gangsta.com',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo.Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potenti.Vivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui',
  password_hash: bcrypt.hashSync('goldenMaglone', salt),
  posts: Posts,
  inserted_at: '',
  updated_at: '',
}

export const Users = Object.values(users)