import Vue from 'vue'
import Router from 'vue-router'
import { Author, Authors } from './components/Authors'
import { Comment, Comments } from './components/Comments'
import { Landing } from './components/Landing'
import { Post, Posts } from './components/Posts'
import { Login } from './components/Users/'

Vue.use(Router)

const routes = [
  { path: '/', component: Landing, auth: false },
  { path: '/posts', component: Posts, auth: false },
  { path: '/post/:id', component: Post, auth: false },
  { path: '/authors', component: Authors, auth: false },
  { path: '/author/:id', component: Author, auth: false },
  { path: '/comments', component: Comments, auth: false },
  { path: '/comment/:id', component: Comment, auth: false },
  { path: '/login', component: Login, auth: false },
  { path: '*' }, // fallback match for invalid url, 404
]

export default new Router({
  routes,
})
