<template>
  <div id="header" class="header" v-scroll="scroll">
    <div class="logo" @click="goHome">{{ headerText }}</div>

    <div class="user" @click="showLogin = !showLogin">
      Login
      <div class="login-form">
        <UserIcon :color="color"></UserIcon>
      </div>
    </div>
    <div class="login-wrapper">
      <Login v-if="showLogin"></Login>
    </div>
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
  position: fixed;
  top: 0;
  left: 90%;
  width: 5em;
  padding-right: 2em;
  cursor: pointer;
  color: #d3d3d3;
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  max-width: 10em;
}

.login-wrapper {
  position: absolute;
  top: 50%;
  left: 85%;
  margin-top: 0.5em;
  animation: slide-down 0.7s;
}

@keyframes slide-down {
  0% {
    transform: translateY(100%), scale(0.1);
  }
  100% {
    transform: translateY(0%), scale(1);
  }
}
</style>
