import Vue from 'vue'
import Router from 'vue-router'
import { Author, Authors } from './components/Authors'
import { Comment, Comments } from './components/Comments'
import { Landing } from './components/Landing'
import { Post, Posts } from './components/Posts'

Vue.use(Router)

const routes = [
  { path: '/', component: Landing },
  { path: '/posts', component: Posts },
  { path: '/post/:id', component: Post },
  { path: '/authors', component: Authors },
  { path: '/author/:id', component: Author },
  { path: '/comments', component: Comments },
  { path: '/comment/:id', component: Comment },
  { path: '*' }, // fallback match for invalid url, 404
]

export default new Router({
  routes,
})
