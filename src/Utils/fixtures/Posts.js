import { Comments } from './'
const comments = Object.values(Comments)

/* eslint-disable */

/**
 * Posts structures coming from the backend will have this data shape. For creating a new post, :body, :title, visible, and :user_id are required and the api will throw an Error if these fields are not supplied.
 *
 * Notice next that these objects have fields in snake_case, i.e., user_id, featured_image. Snake_case is the convention in Elixir, so the data we will be handling will often come back in this form. In this application, camelCase is the convention and is enforced by the linter. Only in files that will integrate with the backend is snake_case allowed. To do this and avoid linting errors, each file must include eslint-disable at the top of the file, as above.
 */

export const Posts = {}

Posts.post1 = {
  id: 1,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post2 = {
  id: 2,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: false,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post3 = {
  id: 3,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.pos4 = {
  id: 4,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post5 = {
  id: 5,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: false,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post6 = {
  id: 6,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post7 = {
  id: 7,
  title: 'A Lorem Post about Ipsum',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper consequat quam, et auctor felis finibus ut. In a libero sapien. Suspendisse at neque vulputate elit dignissim cursus sed ultricies mi. Pellentesque et augue lacinia sapien malesuada tempor sit amet quis turpis. In eu fermentum arcu, eu luctus ex. Nam bibendum eleifend quam quis placerat. Nam at massa massa. Curabitur aliquam risus at justo vehicula, vestibulum placerat sapien rhoncus. Curabitur id purus enim. Fusce blandit, ante et ultricies iaculis, libero urna volutpat libero, vitae egestas lorem nulla vitae justo. Fusce iaculis enim lorem, nec fermentum justo mollis ac. Vivamus et mauris et orci fringilla faucibus. Suspendisse potentiVivamus mattis leo nec elit venenatis, at malesuada tellus efficitur. Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post8 = {
  id: 8,
  title: 'A Lorem Post about Ipsum',
  body:
    'Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: false,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post9 = {
  id: 9,
  title: 'A Lorem Post about Ipsum',
  body:
    'Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}

Posts.post10 = {
  id: 10,
  title: 'A Lorem Post about Ipsum',
  body:
    'Suspendisse tincidunt nisi sit amet metus dapibus, eu iaculis quam bibendum. Cras vestibulum interdum laoreet. Ut a ultricies ipsum. Pellentesque semper varius justo, a scelerisque libero dictum eget. In et mauris sed nunc pretium viverra in non ipsum. Aliquam laoreet, justo vitae fringilla faucibus, tortor risus gravida est, eget laoreet enim enim at orci. Etiam aliquam leo non enim gravida, nec tempus lacus condimentum.Etiam pretium est arcu, eget elementum tortor pharetra eu. Praesent a quam imperdiet, rutrum nibh a, ultricies ipsum. Pellentesque turpis augue, egestas at iaculis vitae, maximus nec diam. Donec hendrerit tincidunt egestas. Nulla facilisi. Quisque commodo, ante sed finibus suscipit, enim justo molestie justo, vel vehicula tortor dolor vel elit. Phasellus urna nisi, suscipit iaculis ante efficitur, dapibus eleifend enim. Praesent sed finibus dui.Donec laoreet gravida varius. Morbi at ultricies sem. Etiam tristique, ante sed bibendum convallis, eros diam iaculis mi, eget bibendum neque nunc nec odio. Pellentesque neque purus, feugiat eget porta nec, convallis sed sapien. Vestibulum interdum risus eros, eget efficitur ante egestas nec. Fusce in lacus vitae augue vehicula lacinia. Aenean ut leo magna. Donec faucibus est tempor, vulputate felis sed, fermentum turpis.Praesent leo velit, vehicula et lacus quis, semper imperdiet ipsum. Fusce massa ex, sollicitudin sed est porttitor, rhoncus consectetur ex. Donec venenatis non nulla non sollicitudin. Nullam imperdiet vitae leo in pharetra. Donec egestas hendrerit volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet vulputate pellentesque. Sed non fringilla est. Sed porttitor, velit sed sodales interdum, elit mauris bibendum elit, id eleifend magna elit ut purus. Sed blandit orci vitae porta placerat. Praesent hendrerit porttitor ornare. Quisque vestibulum placerat tellus vitae sodales. Integer sit amet commodo dui.',
  visible: true,
  user_id: 1,
  featured_image: 'https://s3.aws.com/featuredImage/8dklf-2kdf',
  comments: comments,
  inserted_at: '2019-04-27 18:39:54',
  updated_at: '2019-04-27 18:39:54',
}
