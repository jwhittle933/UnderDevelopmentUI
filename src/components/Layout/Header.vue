<template>
  <div id="header" class="header" v-scroll="scroll">
    <div class="logo" @click="goHome">{{ headerText }}</div>
    <div class="user" @click="showLogin = !showLogin">
      Login
      <div class="icon-wrapper">
        <UserIcon :color="color"></UserIcon>
      </div>
    </div>
    <transition name="slide">
      <div v-if="showLogin" class="login-wrapper">
        <Login></Login>
      </div>
    </transition>
  </div>
</template>

<script>
import { UserIcon } from '../Shared'
import Login from '../Users/Login'

export const Header = {
  name: 'Header',
  components: {
    UserIcon,
    Login,
  },
  data() {
    return {
      headerText: '_D | under development',
      color: 'gray',
      showLogin: false,
    }
  },
  methods: {
    goHome: function() {
      this.$router.push('/')
    },
    scroll: function(evt, el) {
      if (window.scrollY > 150) {
        el.setAttribute(
          'style',
          'color: white; background-color:  rgba(120, 120, 120, 0.4)',
        )
      } else el.setAttribute('style', 'color: #000')
    },
  },
}

export default Header
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  overflow: visible;
  width: 100%;
  max-height: 2em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
  transition: background-color 0.2s ease-in;
}
.logo {
  font-family: 'Nunito', sans-serif;
  font-size: 1.5em;
  cursor: pointer;
  color: inherit;
  transition: color 0.3s ease-in;
}
.user {
  display: flex;
  justify-content: space-between;
  width: 5em;
  padding-right: 2em;
  cursor: pointer;
  color: #d3d3d3;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
}

.login-wrapper {
  position: fixed;
  top: 9%;
  left: 88%;
  margin-top: 0.5em;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.7s;
}

.slide-enter {
  transform: translate(100%, 0%) scale(0.01);
}

.slide-leave-to {
  transform: translate(100%, 0%) scale(0.01);
}
</style>
