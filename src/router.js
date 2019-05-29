import Vue from 'vue'
import Router from 'vue-router'
import { Author, Authors } from './components/Authors'

Vue.use(Router)

const routes = [
  { path: '/', component: null },
  { path: '/posts', component: null },
  { path: '/post/:id', component: null },
  { path: '/authors', component: Authors },
  { path: '/author/:id', component: Author },
  { path: '*' } // fallback match for invalid url, 404
]

export default new Router({
  routes
})
