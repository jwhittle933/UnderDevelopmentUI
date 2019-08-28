import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    isLoggedIn: false,
    userCredentials: {
      userName: '',
      userId: '',
    },
  },
  globalTheme: 'primary',
  listStyle: 'tile',
}

const mutations = {
  LOGIN_USER: ({ user }, { username, password }) => {
    user.isLoggedIn = true
    user.userCredentials.userName = username
    return { user, username, password }
  },
  LOGOUT_USER: ({ user }) => {
    return user
  },
  SET_POSTS_DISPLAY: (state, userSelection) => {
    state.listStyle = userSelection
  },
}

const actions = {
  loginUser: ({ commit }) =>
    commit('LOGIN_USER', {
      username: 'testUser',
      password: 'testPass',
    }),
  logoutUser: ({ commit }) => commit('LOGOUT_USER'),
  setPostsDisplay: ({ commit }, userSelection) =>
    commit('SET_POSTS_DISPLAY', userSelection),
}

const getters = {
  isLoggedIn: ({ user }) => user.isLoggedIn,
  getUser: ({ user }) => user.userCredientials,
  getListStyle: ({ listStyle }) => listStyle,
}

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
