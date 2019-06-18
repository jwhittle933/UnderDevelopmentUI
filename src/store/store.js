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
    listStyle: 'tile',
  },
  mutations: {
    loginUser: ({ user }, { username, password }) => {
      return { user, username, password }
    },
    logoutuser: ({ user }) => {
      return user
    },
    setPostsDisplay(state, userSelection) {
      state.listStyle = userSelection
    },
  },
  actions: {
    loginUser: ({ commit }) =>
      commit('loginUser', {
        username: 'testUser',
        password: 'testPass',
      }),
    logoutUser: ({ commit }) => commit('logoutUser'),
    setPostsDisplay: ({ commit }, userSelection) =>
      commit('setPostsDisplay', userSelection),
  },
  getters: {
    idLoggedIn: ({ user }) => user.isLoggedIn,
    getUser: ({ user }) => user.userCredientials,
    getListStyle: ({ listStyle }) => listStyle,
  },
})
