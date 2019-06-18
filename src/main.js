import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.directive('scroll', function(el, binding) {
  const f = function(evt) {
    if (binding.value(evt, el)) {
      window.removeEventListener('scroll', f)
    }
  }
  window.addEventListener('scroll', f)
})

Vue.mixin({
  methods: {
    formatDate: function(dateString) {
      const yearMonths = [
        'January',
        'Febrary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const date = new Date(Date.parse(dateString))
      const month = date.getMonth()
      const day = date.getDay()
      const year = date.getFullYear()
      return `${yearMonths[month]} ${day}, ${year}`
    },
  },
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
