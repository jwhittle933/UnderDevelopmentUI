import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      isLoggedIn: false,
      userCredientials: {
        userName: '',
        userId: '',
      },
    },
  },
  mutations: {
    loginUser: ({ user }, { username, password }) => {
      return { user, username, password }
    },
    logoutUser: ({ user }) => {
      return user
    },
  },
  actions: {
    loginUser: context => context.commit('loginUser'),
    logoutUser: context => context.commit('logoutUser'),
  },
  getters: {
    isLoggedIn: ({ user }) => user.isLoggedIn,
    getUser: ({ user }) => user.userCredientials,
  },
})
