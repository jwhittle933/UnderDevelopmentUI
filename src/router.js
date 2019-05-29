import Vue from 'vue'
import Router from 'vue-router'
//import all router components here
import Author from './components/Authors/Author'
import Authors from './components/Authors/Authors'

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
